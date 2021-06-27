let initialProductState = {
  products: [
    {
      category: "food",
      name: "Pizza",
      description: "",
      price: 10,
      inventoryCount: 5,
      image:
        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/pizza-hut-turns-comeback-expert_0.jpg?itok=U_V-5YAD",
    },
    {
      category: "electronics",
      name: "Google Pixel",
      description: "",
      price: 400,
      inventoryCount: 2,
      image:
        "https://www.techadvisor.com/cmsdata/slideshow/3795872/google_pixel_4a_case_thumb800.jpg",
    },
    {
      category: "electronics",
      name: "Iphone 11",
      description: "",
      price: 500,
      inventoryCount: 2,
      image:
        "https://cdn.pocket-lint.com/r/s/1200x/assets/images/149324-phones-review-review-iphone-11-pro-max-review-product-shots-image1-keant0hfcg.jpg",
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
      return { products: state.products, productsList: state.productsList };

    default:
      return state;
  }
};

export default ProductReducer;
