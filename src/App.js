import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksGrid from './BooksGrid'
import BookSearch from './BookSearch'
import { Link, Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: []
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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<BooksGrid />)} />
        <Route exact path="/search" render={() => (<BookSearch />)} />
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
