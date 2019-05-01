import React from 'react';

const BookListItem = ({book}) => {
    const {title, pages} = book;

    return (<div className="book-list-item">
        <span className="title"><h3>{title}</h3></span>
        <span className="pages">{pages}</span>
    </div>)
};

export default BookListItem;