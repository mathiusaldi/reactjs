const defaultState = {
    cart: [],
  };
  
  const cartlist = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_PRODUCT":
        const existingProduct = state.cart.filter(
          (product) => product.id === payload.id
        );
  
        if (existingProduct.length > 0) {
          const withoutExistingProduct = state.cart.filter(
            (product) => product.id !== payload.id
          );
          const updatedUnitsProduct = {
            ...existingProduct[0],
            qty: existingProduct[0].qty + payload.qty,
          };
  
          return {
            ...state,
            cart: [...withoutExistingProduct, updatedUnitsProduct],
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, payload],
          };
        }
      case "REMOVE_PRODUCT":
        const withoutDeletedProduct = state.cart.filter(
          (product) => product.id !== payload.id
        );    
        return {
          ...state,
          cart: withoutDeletedProduct,
        };
      default:
        return state;
    }
  };
  
  export default cartlist;
  