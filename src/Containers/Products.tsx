import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/products.action";
import { setAllProducts } from "../redux/actions/productActions";
import { RootState } from "../redux/store";
import ProductsCards from "./ProductsCards";
import { productType } from "./product.type";
import { setTitle } from "../utils/HeaderTitle";

const Products = () => {
  const products = useSelector(
    (state: RootState) => state.allProducts.products
  );
  // const product = useSelector((state: RootState) => state.selectedProducts);

  const dispatch = useDispatch();

  const getAllProductsList = async () => {
    try {
      const response = await getAllProducts();
      if (response.status === 200) {
        dispatch(setAllProducts(response.data));
      } else {
        dispatch(setAllProducts([]));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProductsList();
    setTitle()
  }, []);

  if(products.length == 0){
    return <>Fetching Product details...</>
  }

  return (
    <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-w-6xl mx-auto">
      {products.map((product: productType) => {
          return <ProductsCards product={product} />;
        })}
    </div>
  );
};

export default Products;
