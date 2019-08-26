import React, { Component } from 'react';
//import './BookSearch.css';

export default class BookSearch extends Component {

  onSubmit(event) {
    event.preventDefault();
    const value = this.input.value;
    this.props.search(value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="bookSearch">
        <form onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="search">Search:</label>
          <input 
            id="search" 
            type="text" 
            placeholder="Book Title Here"
            ref={input => (this.input = input)}
          />
          <button type="submit">Search</button>      
          <fieldset>
            <select id="bookType">
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Travel</option>
              <option>Self-Help</option>
            </select>
          </fieldset>
          <fieldset>
            <select id="bookPrice">
              <option>Free</option>
              <option>Paid</option>
            </select>
          </fieldset>
        </form>
      </div>
    ) 
  }
}