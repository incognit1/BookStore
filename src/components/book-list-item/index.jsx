import React from 'react';
import {Card, CardActions, CardImage, CardTitle} from "../UI/Card";
import {Button} from "../UI/Button";

const BookListItem = ({book}) => {
    const {title, pages, imageURL} = book;

    return (
        <Card margin="10px">
            <CardImage backgroundImage={imageURL}/>
            <CardTitle>{title}</CardTitle>
            <span className="pages">Страниц: {pages}</span>

            <CardActions>
                <div>
                    <Button primaryColor>Добавить в корзину</Button>
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
