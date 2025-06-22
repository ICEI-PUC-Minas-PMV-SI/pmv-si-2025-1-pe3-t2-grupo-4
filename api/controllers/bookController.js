const bookService = require('../services/bookService');

async function getBookById(req, res) {
  const bookId = parseInt(req.params.id, 10);
  if (isNaN(bookId)) {
    return res.status(400).json({ error: 'Invalid book ID' });
  }
  try {
    const book = await bookService.getBookById(bookId);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching book' });
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await bookService.getBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching books' });
  }
}
async function createBook(req, res) {
  if (
    !req.body ||
    !req.body.titulo ||
    !req.body.autor ||
    !req.body.editora ||
    !req.body.genero ||
    !req.body.link ||
    !req.body.capa
  ) {
    return res.status(400).json({
      error:
        'All fields are necessery: titulo, autor, editora, genero, detalhes, link, capa.',
    });
  }
  try {
    const bookData = req.body;
    const newBook = await bookService.createBook(bookData);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: 'Error creating book' });
  }
}

async function updateBook(req, res) {
  const bookId = parseInt(req.params.id, 10);
  if (isNaN(bookId)) {
    return res.status(400).json({ error: 'Invalid book ID' });
  }
  if (
    !req.body ||
    !req.body.titulo ||
    !req.body.autor ||
    !req.body.editora ||
    !req.body.genero ||
    !req.body.link ||
    !req.body.capa
  ) {
    return res.status(400).json({
      error:
        'All fields are necessery: titulo, autor, editora, genero, detalhes, link,capa.',
    });
  }
  try {
    const bookData = req.body;
    const updatedBook = await bookService.updateBook(bookId, bookData);
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: 'Error updating book' });
  }
}
async function deleteBook(req, res) {
  const bookId = parseInt(req.params.id, 10);
  if (isNaN(bookId)) {
    return res.status(400).json({ error: 'Invalid book ID' });
  }
  try {
    const deletedBook = await bookService.deleteBook(bookId);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(deletedBook);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting book' });
  }
}

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
};
