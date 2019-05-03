const booksLoaded = (newBooks) => ({
    type: 'BOOKS_LOADED',
    payload: newBooks,
});

const booksRequested = () => ({
    type: 'BOOKS_REQUESTED',
});

const booksError = (payload) => ({
    type: 'BOOKS_ERROR',
    payload,
});

const bookAddedToCart = (payload) => ({
    type: 'BOOK_ADDED_TO_CART',
    payload,
});

const allBooksDeletedFromCart = (payload) => ({
    type: 'ALL_BOOKS_DELETED_FROM_CART',
    payload,
});

const bookDeletedFromCart = (payload) => ({
    type: 'BOOK_DELETED_FROM_CART',
    payload,
});

export {
    booksLoaded,
    booksRequested,
    booksError,
    bookAddedToCart,
    allBooksDeletedFromCart,
    bookDeletedFromCart,
}
