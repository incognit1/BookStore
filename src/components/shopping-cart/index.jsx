import React, {Component} from 'react';
import {connect} from "react-redux";

class ShoppingCart extends Component {
    render() {
        const {cartItems, orderTotal} = this.props;

        const renderItem = (item, idx) => (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>{item.total}</td>
            </tr>
        );

        return (
            <div>
                <p>Ваш заказ</p>

                <table>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartItems.map(renderItem)
                    }
                    </tbody>
                </table>


                <p>Общая стоимость: {orderTotal}</p>
            </div>
        )
    }
}

const mapStateToProps = ({orderTotal, cartItems}) => ({
    orderTotal,
    cartItems,
});

export default connect(mapStateToProps)(ShoppingCart);
