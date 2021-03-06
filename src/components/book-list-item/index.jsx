import React from 'react';
import {Card, CardActions, CardImage, CardTitle} from "../UI/Card";
import {Button} from "../UI/Button";

const BookListItem = ({book, onAddedToCart}) => {
    const {title, pages, imageURL, author} = book;

    return (
        <Card margin="10px">
            <CardImage backgroundImage={imageURL}/>
            <CardTitle>{title}</CardTitle>
            <span className="pages">Страниц: {pages}</span>
            <span className="pages">Автор: {author}</span>

            <CardActions>
                <div>
                    <Button primaryColor onClick={onAddedToCart}>Добавить в корзину</Button>
                </div>
                <div>
                    <button>
                        <i className="fas fa-heart"/>
                    </button>
                </div>
            </CardActions>

        </Card>
    )
};

export default BookListItem;
