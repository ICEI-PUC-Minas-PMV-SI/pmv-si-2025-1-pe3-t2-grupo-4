const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/sendemail');

async function getAllUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
}

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

async function createUser(req, res) {
  const user = req.body;
  if (!user || !user.email || !user.senha || !user.nome) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (user.senha.length < 6) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 6 characters long' });
  }
  if (!validateEmail(user.email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  try {
    const newUser = await userService.createUser(user);
    res.status(201).json(newUser);
  } catch (err) {
    if (err.message === 'User already exists with this email') {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Error creating user' });
    }
  }
}

async function login(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  try {
    const user = await userService.getUserByEmail(email);
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!user || !isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    delete user.senha;
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: 'Error during login' });
  }
}

async function createToken(req, res) {
  const { email } = req.body;
  if (!email || !validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  user = await userService.getUserByEmail(email);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  try {
    const token = Math.floor(Math.random() * 90000) + 10000;
    await userService.resetTokenStatusByUser(user.id);
    await userService.createToken(user.id, token);
    sendEmail({
      to: email,
      subject: 'Seu token para redefinição de senha',
      message: `<p>Olá!</p>

<p>Recebemos uma solicitação para redefinir sua senha. Para continuar, use o código abaixo:</p>

<p><strong>${token}</strong></p>

<p>Se você não fez essa solicitação, pode ignorar esta mensagem com segurança.</p>

<p>Atenciosamente,<br>Sua equipe Leitura Livre</p>`,
    });
    res.status(200).json({ message: 'Reset token sent to your email' });
  } catch (err) {
    console.error('Error sending reset token:', err);
    res.status(500).json({ error: 'Error sending reset token' });
  }
}
async function resetPassword(req, res) {
  const { email, token, new_password } = req.body;
  if (!email || !token || !new_password || !validateEmail(email)) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (new_password.length < 6) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 6 characters long' });
  }
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('User found:', user);
    const validToken = await userService.getTokenByUserId(user.id, token);
    if (
      !validToken ||
      validToken.token !== token ||
      validToken.token_utilizado
    ) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }
    await userService.updateTokenStatus(validToken.id);
    await userService.updateUserPassword(user.id, new_password);
    res.json({ message: 'Password reset successfully' });
  } catch (err) {
    console.error('Error resetting password:', err);
    res.status(500).json({ error: 'Error resetting password' });
  }
}

module.exports = { getAllUsers, createUser, login, createToken, resetPassword };
