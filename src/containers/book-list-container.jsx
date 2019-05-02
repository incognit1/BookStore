import React, {Component} from 'react';
import {connect} from "react-redux";
import BookList from "../components/book-list";
import ErrorIndicator from "../components/error-indicator";
import Loader from "../components/loader";
import {booksError, booksLoaded, booksRequested} from "../actions";
import withBookStoreService from "../components/hoc/with-bookstore-service";
import compose from "../utils/compose";

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {loading, books, error} = this.props;

        if(loading) {
            return <Loader/>;
        }

        if(error) {
            return <ErrorIndicator/>;
        }

        return (
            <BookList books={books}/>
        )
    }
}

const mapStateToProps = (state) => ({
    books: state.books,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested());

            bookstoreService.getBooks().then(
                data => dispatch(booksLoaded(data)),
                error => dispatch(booksError(error)),
            );
        }
    }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
