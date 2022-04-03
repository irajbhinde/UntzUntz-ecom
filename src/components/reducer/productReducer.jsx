export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortByPrice: action.payload,
      };
    case "RATINGS":
      return {
        ...state,
        sortByRating: action.payload,
      };
    case "ANJUNADEEP":
      return  {
        ...state,
        categories: {...state.categories, Anjunadeep : !state.categories.Anjunadeep } 
      };
    case "ANJUNABEATS":
      return  {
        ...state,
        categories: {...state.categories, Anjunabeats : !state.categories.Anjunabeats }
      };
    case "ABOVE_AND_BEYOND":
      return  {
        ...state,
        categories: {...state.categories, Above_And_Beyond : !state.categories.Above_And_Beyond }
      };
    case "SHOW_ALL":
      return  {
        ...state,
        getAllProducts: !state.getAllProducts,
      };
    default:
      return state;
  }
};
