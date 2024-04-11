import { actionsTypes } from "../constants/constants";

export const setAllProducts = (payload: any) => {
  return {
    type: actionsTypes.SET_ALL_PRODUCTS,
    payload: payload,
  };
};

export const setSelectedProduct = (payload: any) => {
  return {
    type: actionsTypes.SELECTED_PRODUCT,
    payload: payload,
  };
};

export const setCartProduct = (payload: any) => {
  return {
    type: actionsTypes.SELECTED_CART_PRODUCT,
    payload: payload,
  };
};
