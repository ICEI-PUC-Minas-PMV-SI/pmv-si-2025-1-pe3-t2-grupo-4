const pool = require('../db');

async function getBooks() {
  const result = await pool.query('SELECT * FROM le_livros.livros');
  return result.rows;
}

async function getBookById(bookId) {
  const result = await pool.query(
    'SELECT * FROM le_livros.livros WHERE id = $1',
    [bookId]
  );
  return result.rows[0];
}

async function createBook(bookData) {
  const { titulo, autor, editora, genero, detalhes, link, capa } = bookData;
  const result = await pool.query(
    'INSERT INTO le_livros.livros (titulo, autor, editora, genero,detalhes, link,capa) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *',
    [titulo, autor, editora, genero, detalhes, link, capa]
  );
  return result.rows[0];
}

async function updateBook(bookId, bookData) {
  const { titulo, autor, editora, genero, detalhes, link, capa } = bookData;
  const result = await pool.query(
    'UPDATE le_livros.livros SET titulo = $1, autor = $2, editora = $3, genero = $4, detalhes = $5, link = $6, capa = $7 WHERE id = $8 RETURNING *',
    [titulo, autor, editora, genero, detalhes, link, capa, bookId]
  );
  return result.rows[0];
}

async function deleteBook(bookId) {
  const result = await pool.query(
    'DELETE FROM le_livros.livros WHERE id = $1 RETURNING *',
    [bookId]
  );
  return result.rows[0];
}

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
};
