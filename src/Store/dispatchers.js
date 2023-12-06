

export const addToCartDispatcher = (state, action) => {
   
           const newCartItem = {
            ...action.bicycleToAdd,
           
        };
        const newCart = {
            ...state,
            cart: [...state.cart, newCartItem]
           
        };
        console.log(newCartItem)


       
        
    }


export const deleteFromCartDispatcher = (state, action) => {
    const deletedItem = state.cart.find((book) => book.id === action.bookToDelete.id);

    if (!deletedItem) {
        return state;
    }

    const updatedCart = state.cart.filter((book) => book.id !== action.bookToDelete.id);

    return {
        ...state,
        cart: updatedCart,
        totalAmount: state.totalAmount - (deletedItem.initialPrice * deletedItem.countOfSameBooks),
        countOfCartItems: state.countOfCartItems - 1,
    };
};

export const addSameItem = (state, action) => {
    const updatedCart = state.cart.map((book) =>
        book.id === action.bookToUpdate.id
            ? {
                ...book,
                countOfSameBooks: book.countOfSameBooks + 1,
                priceInUah: book.priceInUah + action.bookToUpdate.initialPrice,
            }
            : book
    );

    const updatedTotalAmount =
        state.totalAmount + action.bookToUpdate.initialPrice;

    return {
        ...state,
        cart: updatedCart,
        totalAmount: updatedTotalAmount,
        countOfCartItems: state.countOfCartItems + 1,
    };
};

export const deleteSameItem = (state, action) => {

    if (action.bookToUpdate.countOfSameBooks === 1) {
        return state
    }

    const updatedCart = state.cart.map((book) =>
        book.id === action.bookToUpdate.id && book.countOfSameBooks > 1
            ? {
                ...book,
                countOfSameBooks: book.countOfSameBooks - 1,
                priceInUah: book.priceInUah - action.bookToUpdate.initialPrice,
            }
            : book
    );

    const updatedTotalAmount =
        state.totalAmount - action.bookToUpdate.initialPrice;

    return {
        ...state,
        cart: updatedCart,
        totalAmount: updatedTotalAmount,
        countOfCartItems: state.countOfCartItems - 1,
    };
};