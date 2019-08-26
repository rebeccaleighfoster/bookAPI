import React, { Component } from 'react';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      error: null
    };
  }

  search(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyCojqkcY_B4ctfXcKszQGc7RTm9Pj0_oS4g&q=${value}`;
    const options = {
      method: 'GET'
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }

  render() {
    return (
      <div className='App'>
        <BookSearch search={value => this.search(value)} />
        <BookList />
      </div>
    );
  }
}
export default App;