import React, { Component } from 'react';
import { connect } from 'react-redux';
//action creator
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';



class BookList extends Component {
  renderList(){
    return  this.props.books.map(book => {
      return (
        <li onClick={()=>this.props.selectBook(book)} className="list-group-item" key={book.title}>
            {book.title}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned from state will //show up as this.props inside of BookList
  return {
    books: state.books
  }
}
//anything returned from this function will end up as props on the BookList container (like above)
function mapDispatchToProps(dispatch){
  // the dispatch makes the action flow through all the reducers
  // whenver selectBook is called, the //result should be passed to all reducers
  return bindActionCreators({selectBook},dispatch);
}

//connecting the state to the component/container
// promote booklist to a container, it needs to know about this new dispatch method: selectBook, so it is available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
