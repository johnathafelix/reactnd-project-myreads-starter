import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import { Link, Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: [],
    query: '',
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBookShelf = async (book, newShelf) => {
    await BooksAPI.update(book, newShelf)
    let books = await BooksAPI.getAll()
    this.setState({ books })
  }

  searchBook = async (query) => {
    this.setState({ query, searchResults: [] })
    if (query) {
      query = query.trim()
      let searchResults = await BooksAPI.search(query)
      if (searchResults && searchResults.length > 0) {
        this.setState({ searchResults })
      }
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            changeBookShelf={this.changeBookShelf}
          />)}
        />
        <Route exact path="/search" render={() => (
          <BookSearch
            books={this.state.books}
            query={this.state.query}
            searchResults={this.state.searchResults}
            changeBookShelf={this.changeBookShelf}
            searchBook={this.searchBook}
          />
        )} />
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
