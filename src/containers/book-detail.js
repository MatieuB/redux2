import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    //check for selected book so its not null!
    if(!this.props.book){
      return <div>Select a Book to get started</div>
    }

    return (
      <div>
        <h3>Details for :</h3>
        <div>Title: {this.props.book.title}</div>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    )
  }
 }

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
