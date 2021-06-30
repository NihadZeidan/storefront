import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./CategoryStore";

let reducers = combineReducers({
  Category: CategorySlice,
});

// // thunk middleware is enabled
// // extension is enabled too

const myStore = configureStore({ reducer: reducers });

export default myStore;
