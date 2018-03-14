import React, { Component } from 'react'
import PropTypes from 'prop-types'

function getBookShelf(book, books) {
  let shelf = "none"
  if (book.shelf) {
    shelf = book.shelf
  } else {
    let newBook = books.filter((b) => (b.id === book.id))
    if (newBook[0]) {
      shelf = newBook[0].shelf
    }
  }
  return shelf
}

function getImageLinks(book) {
  if (book.imageLinks) {
    return book.imageLinks.smallThumbnail
  }
}

function getBookAuthors(book) {
  if (book.authors) {
    return book.authors
  }
}

class BookGrid extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
    booksAlreadyOnShelves: PropTypes.array
  }

  render() {
    const { books, changeBookShelf, booksAlreadyOnShelves } = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${getImageLinks(book)})` }}></div>
                <div className="book-shelf-changer">
                  <select value={getBookShelf(book, booksAlreadyOnShelves)} onChange={(event) => changeBookShelf(book, event.target.value)}>
                    <option value="moveTo" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{getBookAuthors(book)}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}

export default BookGrid