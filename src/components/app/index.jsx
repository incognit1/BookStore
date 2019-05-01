import React from 'react';
import withBookStoreService from "../hoc/with-bookstore-service";

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());

    return (
        <h1>Hello world</h1>
    );
};

export default withBookStoreService()(App);