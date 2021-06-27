import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Products from "./components/Products";


const App = (props) => {
  return (
    <div>
      <Header />

      <Category />

      <Products />

      <Footer />
    </div>
  );
};
export default App;
