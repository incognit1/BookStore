import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookStoreService from "../hoc/with-bookstore-service";
import {booksLoaded} from "../../actions";
import compose from "../../utils/compose";

class BookList extends Component {
    componentDidMount() {
        const {bookstoreService, booksLoaded} = this.props;
        const data = bookstoreService.getBooks();

        booksLoaded(data);
    }

    render() {
        return (<div className="book-list">
            {this.props.books.map(book => {
                return (<BookListItem key={book.id} book={book}/>)
            })}
        </div>)
    }
}

const mapStateToProps = (state) => ({
    books: state.books,
});

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, {booksLoaded})
)(BookList);