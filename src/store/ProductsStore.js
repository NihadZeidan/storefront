// import { createSlice } from "@reduxjs/toolkit";

// import superagent from "superagent";

// const myApi = "https://nihad-api-server.herokuapp.com/product";

// const ProductSlice = createSlice({
//   name: "Product",
//   initialState: {
//     products: [],
//     productsList: [],
//     details: [],
//   },
//   reducers: {
//     GET(state, action) {
//       state.products.push(action.payload);
//       console.log(action.payload)
//     },

//     PUT(state, action) {
//       state.productsList.forEach((product) => {
//         if (action.payload._id === product._id) {
//           product.inventoryCount--;
//           product.cartCount++;
//         }
//       });
//     },

//     ACTIVE(state, action) {
//       let products = []
//       state.products.forEach((product) => {
//         if (product.category === action.payload) {
//           products.push(product);
//         }
//       });
//       state.productsList = products
//     },

//     PUT_REMOVE(state, action) {
//       state.productsList.forEach((product) => {
//         if (action.payload._id === product._id) {
//           product.inventoryCount = product.cartCount + product.inventoryCount;
//           product.cartCount = 0;
//         }
//       });
//     },

//     details(state, action) {
//       let targetedProduct = state.productsList.filter((item) => {
//         return item._id == action.payload;
//       });
//       state.details.push(targetedProduct);
//     },
//   },
// });

// export const { details, PUT_REMOVE, ACTIVE, PUT, GET } = ProductSlice.actions;
// export default ProductSlice.reducer;

// export const getRemoteData = () => (dispatch, state) => {
//   superagent.get(myApi).then((res) => {
//     dispatch(GET(res.body));
//   });
// };

// export const updateRemoteData = (item) => (dispatch, state) => {
//   superagent
//     .put(`${myApi}/${item._id}`)
//     .send({
//       inventoryCount: item.inventoryCount - 1,
//       cartCount: item.cartCount + 1,
//     })
//     .then((res) => {
//       dispatch(PUT(res.body));
//     });
// };

// export const updateRemoteDataAfterDeleteFromCart =
//   (id, inventoryCount, cartCount) => (dispatch, state) => {
//     superagent
//       .put(`${myApi}/${id}`)
//       .send({
//         inventoryCount: cartCount + inventoryCount,
//         cartCount: 0,
//       })
//       .then((res) => {
//         dispatch(PUT_REMOVE(res.body));
//       });
//   };

