import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";

import {Provider} from 'react-redux';
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import store from "./store";
import ErrorHandler from "./components/error-handler";
import { BrowserRouter as Router } from "react-router-dom";
import BookstoreService from "./services/bookstore-service";

const bookstoreService = new BookstoreService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorHandler>
            <Router>
                <BookstoreServiceProvider value={bookstoreService}>
                    <App/>
                </BookstoreServiceProvider>
            </Router>
        </ErrorHandler>
    </Provider>,
    document.getElementById('root')
);