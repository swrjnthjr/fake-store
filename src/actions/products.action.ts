import { productsAxios } from "../axios";

export const getAllProducts = async() => {
  return productsAxios("products")
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      console.log(err);
      return err
    });
};
