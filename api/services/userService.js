const { get } = require('http');
const bcrypt = require('bcrypt');
const pool = require('../db');
const { hash } = require('crypto');

async function createToken(user_id, token) {
  const result = await pool.query(
    'INSERT INTO le_livros.tokens (token,usuario_id ,token_utilizado) VALUES ($1, $2, $3) RETURNING *',
    [token, user_id, false]
  );
  return result.rows[0];
}

async function getTokenByUserId(user_id, token) {
  const result = await pool.query(
    'SELECT * FROM le_livros.tokens WHERE usuario_id = $1 AND token_utilizado = false AND token = $2',
    [user_id, token]
  );
  return result.rows[0];
}
async function resetTokenStatusByUser(user_id) {
  const result = await pool.query(
    'UPDATE le_livros.tokens SET token_utilizado = true WHERE usuario_id = $1',
    [user_id]
  );
  return result.rowCount > 0;
}
async function updateTokenStatus(token_id) {
  const result = await pool.query(
    'UPDATE le_livros.tokens SET token_utilizado = true WHERE id = $1 RETURNING *',
    [token_id]
  );
  return result.rows[0];
}

async function getUserByEmail(email) {
  const result = await pool.query(
    'SELECT * FROM le_livros.usuarios WHERE email = $1',
    [email]
  );
  return result.rows[0];
}

async function updateUserPassword(user_id, newPassword) {
  const hashedPassword = await hashPassword(newPassword);
  const result = await pool.query(
    'UPDATE le_livros.usuarios SET senha = $1 WHERE id = $2 RETURNING *',
    [hashedPassword, user_id]
  );
  return result.rows[0];
}

async function hashPassword(plainPassword) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(plainPassword, saltRounds);
  return hash;
}

async function createUser(user) {
  const { nome, email, senha } = user;
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists with this email');
  }
  hashedPassword = await hashPassword(senha);
  if (!hashedPassword) {
    throw new Error('Error hashing password');
  }
  const result = await pool.query(
    'INSERT INTO le_livros.usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
    [nome, email, hashedPassword]
  );
  return { status: 'success', message: 'User created successfully' };
}

module.exports = {
  createUser,
  getUserByEmail,
  createToken,
  resetTokenStatusByUser,
  updateTokenStatus,
  updateUserPassword,
  getTokenByUserId,
};
