import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookStoreService from "../hoc/with-bookstore-service";
import {booksLoaded} from "../../actions";
import compose from "../../utils/compose";
import {Grid} from "../../styles/common";

class BookList extends Component {
    componentDidMount() {
        const {bookstoreService, booksLoaded} = this.props;
        const data = bookstoreService.getBooks();

        booksLoaded(data);
    }

    render() {
        return (
            <Grid>
                {this.props.books.map(book => {
                    return (<BookListItem key={book.id} book={book}/>)
                })}
            </Grid>
            )
    }
}

const mapStateToProps = (state) => ({
    books: state.books,
});

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, {booksLoaded})
)(BookList);
