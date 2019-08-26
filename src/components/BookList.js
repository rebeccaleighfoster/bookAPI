import React, { Component } from 'react';
//import './BookList.css';
import BookItem from './BookItem.js';

const $ = window.$;
//not really sure what this is..? I just googled why $ was coming in undefined, and stack overflow told me to do this, so here it is.. problem fixed.. 

class BookList extends Component {
  bookSearchResults(responseJson) {
    $('#bookItem').empty();
    for (let i = 0; i < responseJson.results.length; i++) {
      $('#bookItem').append(
        `<li>
          <h3>${responseJson.results[i].title}</h3>
          <h4>${responseJson.results[i].authors}</h4>
          <p>${responseJson.results[i].price}</p>
          <p>${responseJson.results[i].description}</p>
        </li>`
        );
      }
  }
  render() {
      return (
        <div className="bookList">
          <form className="formList">
            <ul>
              <li><BookItem /></li>
              <li><BookItem /></li>
              <li><BookItem /></li>
              <li><BookItem /></li>
            </ul>
          </form>
        </div>
      );
    }
}
export default BookList;