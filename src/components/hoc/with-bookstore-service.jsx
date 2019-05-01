import React from 'react';
import {BookstoreServiceConsumer} from "../bookstore-service-context";

const withBookStoreService = () => (View) => {
    return (props) => (
        <BookstoreServiceConsumer>
            {(service) => <View {...props} bookstoreService={service}/>}
        </BookstoreServiceConsumer>
    );
};

export default withBookStoreService;