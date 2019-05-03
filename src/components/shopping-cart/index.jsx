import React, {Component} from 'react';
import {connect} from "react-redux";

import './shopping-cart.css';
import {allBooksDeletedFromCart, bookAddedToCart, bookDeletedFromCart} from "../../actions";

class ShoppingCart extends Component {
    render() {
        const {cartItems, orderTotal, bookDeletedFromCart, bookAddedToCart, allBooksDeletedFromCart} = this.props;

        const renderItem = (item, idx) => (
            <div className="row" key={idx}>
                <div className="cell" data-title="Full Name">
                    {idx + 1}
                </div>
                <div className="cell" data-title="Age">
                    {item.title}
                </div>
                <div className="cell" data-title="Job Title">
                    {item.count}
                </div>
                <div className="cell" data-title="Location">
                    {item.total}
                </div>
                <div className="cell" data-title="Location">
                    <button className='button' onClick={() => bookDeletedFromCart(item.itemId)}>-</button>
                    <button className='button' onClick={() => bookAddedToCart(item.itemId)}>+</button>
                    <button className='button' onClick={() => allBooksDeletedFromCart(item.itemId)}>Удалить</button>
                </div>
            </div>
        );
        console.log(cartItems);

        return (
            <div>
                <p>Ваш заказ</p>

                <div className="row header">
                    <div className="cell">
                        №
                    </div>
                    <div className="cell">
                        Название
                    </div>
                    <div className="cell">
                        Количество
                    </div>
                    <div className="cell">
                        Цена
                    </div>
                    <div className="cell">Действия</div>
                </div>


                {
                    cartItems.map(renderItem)
                }

                <p>Общая стоимость: {orderTotal}</p>
            </div>
        )
    }
}

const mapStateToProps = ({orderTotal, cartItems}) => ({
    orderTotal,
    cartItems,
});

const mapDispatchToProps = {
    allBooksDeletedFromCart: allBooksDeletedFromCart,
    bookAddedToCart: bookAddedToCart,
    bookDeletedFromCart: bookDeletedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
