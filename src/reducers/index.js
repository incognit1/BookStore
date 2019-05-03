const initialState = {
    books     : [],
    loading   : true,
    error     : null,
    cartItems : [{
        count: 1,
        id: 64.53688120309322,
        itemId: 2,
        title: "Angular для профессионалов",
        total: 800,
    }],
    orderTotal: 300
};

const updateCartItems = (cartItems, item, idx) => {
    if (item.count <= 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1),
        ]
    }

    if (idx === -1) {
        return [...cartItems, item];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ]
};

const getCartItem = (book, item = {}, quantity) => {
    const {
              id     = Math.random() * 100,
              count  = 0,
              title  = book.title,
              total  = 0,
              itemId = book.id,
          } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + book.price * quantity,
        itemId,
    };
};

const updateOrder = (state, bookId, quantity) => {
    const book       = state.books.find(book => book.id === bookId),
          bookIndexInCart = state.cartItems.findIndex(item => item.itemId === bookId);

    const bookInCart = state.cartItems[bookIndexInCart];

    let cartItem = getCartItem(book, bookInCart, quantity);

    return {
        ...state,
        cartItems: updateCartItems(state.cartItems, cartItem, bookIndexInCart),
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books  : action.payload,
                loading: false,
                error  : null,
            };

        case 'BOOKS_REQUESTED':
            return {
                ...state,
                books  : [],
                loading: true,
                error  : null,
            };

        case 'BOOKS_ERROR':
            return {
                ...state,
                books  : [],
                loading: false,
                error  : action.payload,
            };

        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, +1);

        case 'ALL_BOOKS_DELETED_FROM_CART':
            const item = state.cartItems.find(item => item.itemId === action.payload);
            return updateOrder(state, action.payload, -item.count);

        case 'BOOK_DELETED_FROM_CART':
            return updateOrder(state, action.payload, -1);


        default:
            return state;
    }
};

export default reducer;
