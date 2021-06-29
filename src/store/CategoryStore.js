let initialState = {
  categories: [],
  activeCategory: "none",
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET":
      let uniqueCat = [];

      for (let category of payload) {
        if (!uniqueCat.includes(category.category)) {
          uniqueCat.push(category.category);
        }
      }
      return {
        categories: [...uniqueCat],
        activeCategory: state.activeCategory,
      };
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
