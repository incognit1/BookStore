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

export {
    booksLoaded,
    booksRequested,
    booksError,
}
