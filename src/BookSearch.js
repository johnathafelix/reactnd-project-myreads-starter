import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookGrid from './BookGrid'

class BookSearch extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired,
        searchResults: PropTypes.array.isRequired,
        changeBookShelf: PropTypes.func.isRequired,
        searchBook: PropTypes.func.isRequired
    }

    render() {
        const { books, query, searchResults, changeBookShelf, searchBook } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => searchBook(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookGrid
                            books={searchResults}
                            changeBookShelf={changeBookShelf}
                            booksAlreadyOnShelves={books}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch
