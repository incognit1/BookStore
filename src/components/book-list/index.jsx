import React from 'react';
import BookListItem from "../book-list-item";
import {Grid} from "../../styles/common";

const BookList = ({books, onAddedToCart}) => (
    <Grid>
        {books.map(book => {
            return (<BookListItem key={book.id} onAddedToCart={() => onAddedToCart(book.id)} book={book}/>)
        })}
    </Grid>
);

export default BookList;
