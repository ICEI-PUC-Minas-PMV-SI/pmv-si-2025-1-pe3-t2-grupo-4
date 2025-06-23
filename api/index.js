require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');
const app = express();

app.use(express.json());

const allowedOrigins = [
  'https://leitura-livre.netlify.app/',
  'http://localhost:3000', // útil em dev local
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // se estiver usando cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.use((req, res, next) => {
  const apiKey = req.headers['x-access-key'];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res
      .status(403)
      .json({ error: 'Forbidden: Invalid or missing API key' });
  }
  next();
});

app.use('/user', userRoutes);
app.use('/book', bookRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
