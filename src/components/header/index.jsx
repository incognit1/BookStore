import React from 'react';
import {Link} from 'react-router-dom'
import {Header$} from "./header";

const Header = () => {
    return (
        <Header$>
            <div className='logo'>
                <Link to='/'>
                    <h2>BookStore</h2>
                </Link>
            </div>
            <div className='shopping-cart-preview'>
                <Link to='/cart'>
                    <p>5 items ($200)</p>
                </Link>
            </div>
        </Header$>
    );
};

export default Header;
