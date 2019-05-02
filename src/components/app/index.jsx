import React from 'react';
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import {Switch, Route} from "react-router-dom"
import Header from "../header";
import GlobalStyle from './../../styles/global'
import {getTheme} from "../../styles/theme";
import {ThemeProvider} from "styled-components";
import {Wrapper} from "../../styles/common";

const App = () => {
    const theme = getTheme('blue');

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle/>
                <Header/>
                <Wrapper margin='90px 0 0 0'>
                    <Switch>
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/cart' component={CartPage}/>
                    </Switch>
                </Wrapper>
            </>
        </ThemeProvider>
    );
};

export default App;
