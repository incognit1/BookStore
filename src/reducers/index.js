const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 0,
            title: 'Джеки Чан',
            count: 2,
            total: 145
        },
        {
            id: 1,
            title: 'Дон Хуан',
            count: 1,
            total: 165
        },
    ],
    orderTotal: 300
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            };

        case 'BOOKS_REQUESTED':
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            };

        case 'BOOKS_ERROR':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
