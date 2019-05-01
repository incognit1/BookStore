import React from 'react';
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import { Switch, Route } from "react-router-dom"
import Header from "../header";

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </div>

    );
};

export default App;