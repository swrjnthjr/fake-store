import { combineReducers } from "redux";
import {
    allProductsReducers,
    selectedCartProductReducers,
    selectedProductReducers,
} from "./productsReducers";

export const reducers = combineReducers({
  allProducts: allProductsReducers,
  selectedProducts: selectedProductReducers,
  cartProduct: selectedCartProductReducers,
});
