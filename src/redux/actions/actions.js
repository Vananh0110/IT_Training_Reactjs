export const SET_SELECTED_BRANDS = 'SET_SELECTED_BRANDS';
export const SET_SELECTED_CATEGORIES = 'SET_SELECTED_CATEGORIES';
export const SET_SELECTED_RATINGS = 'SET_SELECTED_RATINGS';
export const SET_FREE_SHIPPING = 'SET_FREE_SHIPPING';
export const SET_PRICE_RANGE = 'SET_PRICE_RANGE';

export const setSelectedBrands = (selectedBrands) => ({
    type: SET_SELECTED_BRANDS,
    payload: selectedBrands,
  });

  export const setSelectedCategories = (selectedCategories) => ({
    type: SET_SELECTED_CATEGORIES,
    payload: selectedCategories,
  });

  export const setSelectedRatings = (selectedRatings) => ({
    type: SET_SELECTED_RATINGS,
    payload: selectedRatings,
  });

  export const setFreeShipping = (freeShipping) => ({
    type: SET_FREE_SHIPPING,
    payload: freeShipping,
  });

  export const setPriceRange = (priceRange) => ({
    type: SET_PRICE_RANGE,
    payload: priceRange,
  });