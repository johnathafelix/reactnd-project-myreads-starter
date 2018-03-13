import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookGrid from './BookGrid'

const shelves = [
  {
    'id': 'currentlyReading',
    'description': 'Currently Reading'
  },
  {
    'id': 'wantToRead',
    'description': 'Want To Read'
  },
  {
    'id': 'read',
    'description': 'Read'
  }
]

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  }

  render() {

    const { books, onChangeShelf } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ol className="books-shelf-title">
              {shelves.map((shelf) => (
                <li key={shelf.id}>
                  <h2 className="bookshelf-title">{shelf.description}</h2>
                  <div className="bookshelf">
                    <div className="bookshelf-books">
                      <BookGrid
                        books={books.filter((book) => { return shelf.id === book.shelf })}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf