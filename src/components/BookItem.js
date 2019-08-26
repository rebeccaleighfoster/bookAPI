    
import React from 'react';
//import './BookItem.css';

export default class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authors: "",
      price: "",
      description: "",
      url: ""
    };
  }

  render() {
    return (
      <div className="bookItem">
          <h3>Title: {this.state.title}</h3>
          <h4>Author: {this.state.authors}</h4>
          <p>{this.state.price}</p>
          <p>{this.state.description}</p>
      </div>
    )
  }
}