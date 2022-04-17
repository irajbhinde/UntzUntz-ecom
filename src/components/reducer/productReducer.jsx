export const productReducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case "SORT":
      return {
        ...state,
        sortByPrice: payload,
      };
    case "RATINGS":
      return {
        ...state,
        sortByRating: payload,
      };
    case "ANJUNADEEP":
      return {
        ...state,
        categories: {
          ...state.categories,
          Anjunadeep: !state.categories.Anjunadeep,
        },
      };
    case "ANJUNABEATS":
      return {
        ...state,
        categories: {
          ...state.categories,
          Anjunabeats: !state.categories.Anjunabeats,
        },
      };
    case "ABOVE_AND_BEYOND":
      return {
        ...state,
        categories: {
          ...state.categories,
          Above_And_Beyond: !state.categories.Above_And_Beyond,
        },
      };
    case "CDS":
      return {
        ...state,
        categories: {
          ...state.categories,
          CDs: !state.categories.CDs,
        },
      };
    case "POSTERS":
      return {
        ...state,
        categories: {
          ...state.categories,
          Posters: !state.categories.Posters,
        },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortByPrice: null,
        sortByRating: null,
        categories: {
          Anjunadeep: false,
          Anjunabeats: false,
          Above_And_Beyond: false,
          CDs:false,
          Posters:false
        },
      };
    default:
      return state;
  }
};
