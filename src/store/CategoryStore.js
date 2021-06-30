import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";
const myApi = "https://nihad-api-server.herokuapp.com/product";

const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    categories: [],
    activeCategory: "none",
    products: [],
    productsList: [],
    details: [],
    cart: [],
  },
  reducers: {
    GET(state, action) {
      for (let category of action.payload) {
        if (!state.categories.includes(category.category)) {
          state.categories.push(category.category);
        }
      }

      state.products = [];
      state.products.push(...action.payload);
    },

    ACTIVE(state, action) {
      state.activeCategory = `${action.payload}`;
      let myproducts = [];
      state.products.forEach((product) => {
        if (product.category === action.payload) {
          myproducts.push(product);
        }
      });
      state.productsList = myproducts;
    },

    PUT(state, action) {
      state.cart.push(action.payload);

      state.productsList.forEach((product) => {
        if (action.payload._id === product._id) {
          product.inventoryCount--;
          product.cartCount++;
        }
      });
    },

    PUT_REMOVE(state, action) {
      state.productsList.forEach((product) => {
        if (action.payload._id === product._id) {
          product.inventoryCount = product.cartCount + product.inventoryCount;
          product.cartCount = 0;
        }
      });
      let newCart = state.cart.filter((item) => {
        return item.name !== action.payload.name;
      });
      state.cart = [...newCart];
    },

    details(state, action) {
      let targetedProduct = state.productsList.filter((item) => {
        return item._id == action.payload;
      });
      state.details.push(...targetedProduct);
    },
  },
});

export const updateRemoteDataAfterDeleteFromCart =
  (id, inventoryCount, cartCount) => (dispatch, state) => {
    superagent
      .put(`${myApi}/${id}`)
      .send({
        inventoryCount: cartCount + inventoryCount,
        cartCount: 0,
      })
      .then((res) => {
        dispatch(PUT_REMOVE(res.body));
      });
  };

export const updateRemoteData = (item) => (dispatch, state) => {
  superagent
    .put(`${myApi}/${item._id}`)
    .send({
      inventoryCount: item.inventoryCount - 1,
      cartCount: item.cartCount + 1,
    })
    .then((res) => {
      dispatch(PUT(res.body));
    });
};
export const getRemoteData = () => (dispatch, state) => {
  superagent.get(myApi).then((res) => {
    dispatch(GET(res.body));
  });
};
export default CategorySlice.reducer;

export const { GET, ACTIVE, PUT, PUT_REMOVE, details } = CategorySlice.actions;
