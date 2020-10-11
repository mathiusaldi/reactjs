export const addProduct = (cart) => ({
    type: 'ADD_PRODUCT',
    payload: cart,
});

export const removeProduct = (cart) => ({
    type: 'REMOVE_PRODUCT',
    payload: cart,
});
