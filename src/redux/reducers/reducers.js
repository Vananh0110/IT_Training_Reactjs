import { 
    SET_SELECTED_BRANDS,
    SET_SELECTED_CATEGORIES,
    SET_SELECTED_RATINGS,
    SET_FREE_SHIPPING,
    SET_PRICE_RANGE,
} from "../actions/actions";

const initialState = {
    selectedBrands: [],
    selectedCategories: [],
    selectedRatings: [],
    freeShipping: false,
    priceRange: null,
  };

  const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SELECTED_BRANDS:
        return {
          ...state,
          selectedBrands: action.payload,
        };
      case SET_SELECTED_CATEGORIES:
        return {
          ...state,
          selectedCategories: action.payload,
        };
      case SET_SELECTED_RATINGS:
        return {
          ...state,
          selectedRatings: action.payload,
        };
      case SET_FREE_SHIPPING:
        return {
          ...state,
          freeShipping: action.payload,
        };
      case SET_PRICE_RANGE:
        return {
          ...state,
          priceRange: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filtersReducer;