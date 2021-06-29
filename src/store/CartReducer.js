let myCart = {
  cart: [],
};

const CartReducer = (state = myCart, action) => {
  let { type, payload } = action;
  let myNewCart = [];

  switch (type) {
    case "PUT":
      if (!state.cart.includes(payload._id)) {
        myNewCart = [...state.cart, payload];
      }
      return { ...state, cart: myNewCart };

    case "PUT_REMOVE":
      let newCart = state.cart.filter((item) => {
        return item.name !== payload.name;
      });

      return { ...state, cart: newCart };

    default:
      return state;
  }
};

export default CartReducer;
