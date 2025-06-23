require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const apiKey = req.headers['x-access-key'];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res
      .status(403)
      .json({ error: 'Forbidden: Invalid or missing API key' });
  }
  next();
});

app.options('*', cors());

app.use('/user', userRoutes);
app.use('/book', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
