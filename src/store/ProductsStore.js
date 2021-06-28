let initialProductState = {
  products: [
    {
      category: "food",
      name: "Pizza",
      description: "",
      price: 10,
      inventoryCount: 3,
      image:
        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/pizza-hut-turns-comeback-expert_0.jpg?itok=U_V-5YAD",
      cartCount: 0,
    },
    {
      category: "electronics",
      name: "Google Pixel",
      description: "",
      price: 400,
      inventoryCount: 3,
      image:
        "https://www.techadvisor.com/cmsdata/slideshow/3795872/google_pixel_4a_case_thumb800.jpg",
      cartCount: 0,
    },
    {
      category: "electronics",
      name: "Iphone 11",
      description: "",
      price: 500,
      inventoryCount: 3,
      image:
        "https://cdn.pocket-lint.com/r/s/1200x/assets/images/149324-phones-review-review-iphone-11-pro-max-review-product-shots-image1-keant0hfcg.jpg",
      cartCount: 0,
    },
    {
      category: "clothes",
      name: "T-shirt",
      description: "",
      price: 50,
      inventoryCount: 3,
      image:
        "https://image.made-in-china.com/202f0j00gpLRHTArqFkt/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.jpg",
      cartCount: 0,
    },
  ],

  productsList: [],
};

const ProductReducer = (state = initialProductState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      state.productsList = [];
      state.products.forEach((product) => {
        if (product.category === payload.normalizedName) {
          state.productsList.push(product);
        }
      });
      return { ...state };

    case "addToCart":
      let newList = state.productsList.map((product) => {
        if (payload.name === product.name) {
          if (payload.inventoryCount > 0) {
            product.inventoryCount--;
          }
        }
        return product;
      });

      return { ...state, productsList: newList };

    case "RemoveItem":
      let updateInventory = state.productsList.map((product) => {
        if (payload.name === product.name) {
          product.inventoryCount = product.inventoryCount + product.cartCount;
        }
        return product;
      });
      return { ...state, productsList: updateInventory };

    default:
      return state;
  }
};

export const addToCart = (payload) => {
  return {
    type: "addToCart",
    payload: payload,
  };
};

export default ProductReducer;
