import React from 'react';
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import { Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </div>

    );
};

export default App;