import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";

const App = (props) => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Category />
          <Products />
        </Route>

        <Route exact path="/products/details">
          <ProductDetails />
        </Route>

        <Route exact path="/checkout">
          <ShoppingCart />
        </Route>
      </Switch>

      <div>
        <Footer />
      </div>
    </>
  );
};
export default App;
