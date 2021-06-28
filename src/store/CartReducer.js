let myCart = {
  cart: [],
};

const CartReducer = (state = myCart, action) => {
  let { type, payload } = action;

  switch (type) {
    case "addToCart":
      if (!state.cart.includes(payload)) {
        state.cart.push(payload);
        payload.cartCount = 1;
      } else if (payload.inventoryCount > 0) {
        state.cart.push(payload);
        payload.cartCount++;
      }
      return { ...state };

    case "RemoveItem":
      let newCart = state.cart.filter((item) => {
        return item.name !== payload.name;
      });

      return { ...state, cart: newCart };

    default:
      return state;
  }
};

export const remove = (payload) => {
  return {
    type: "RemoveItem",
    payload: payload,
  };
};
export default CartReducer;
