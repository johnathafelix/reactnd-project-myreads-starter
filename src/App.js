import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksGrid from './BooksGrid'
import BookSearch from './BookSearch'

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
        <BooksGrid />
        <BookSearch />
      </div>
    )
  }
}

export default BooksApp
