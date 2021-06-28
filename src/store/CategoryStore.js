let initialState = {
  categories: [
    { normalizedName: "food", displayName: "Food", description: "ssssss" },
    { normalizedName: "clothes", displayName: "Clothes", description: "dddddddd" },
    {
      normalizedName: "electronics",
      displayName: "Electronics",
      description: "aaaaa",
    },
  ],
  activeCategory: "none",
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return {
        categories: state.categories,
        activeCategory: payload.normalizedName,
      };

    default:
      return state;
  }
};

export const activeCat = (category) => {
  return {
    type: "ACTIVE",
    payload: category,
  };
};
