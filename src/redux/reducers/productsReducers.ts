import { actionsTypes } from "../constants/constants";

const productInitialState = null;
const cartProductInitialState = {
  product: [],
};

const allProductInitialState = {
  products: [],
};

export const allProductsReducers = (
  state = allProductInitialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case actionsTypes.SET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

export const selectedProductReducers = (
  state = productInitialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case actionsTypes.SELECTED_PRODUCT:
      return { ...state, product: [action.payload] };
    default:
      return { ...state };
  }
};

export const selectedCartProductReducers = (
  state = cartProductInitialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case actionsTypes.SELECTED_CART_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return { ...state };
  }
};
