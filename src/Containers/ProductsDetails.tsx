import { FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { setTitle } from "../utils/HeaderTitle";
import { productType } from "./product.type";
import { GoStarFill } from "react-icons/go";

const ProductsDetails: FC = () => {
  const { productId } = useParams();
  const { state } = useLocation();
  const product: productType = state.product;
  console.log(product);

  useEffect(() => {
    setTitle(productId);
  }, []);
  return (
    <div className="flex max-w-5xl m-auto gap-5 mt-10">
      <div className="flex flex-1 justify-center items-center">
        <img
          className="object-contain"
          src={product.image}
          height={500}
          alt={product.title}
        />
      </div>
      <div className="flex-1 flex flex-col text-xl">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div>{product.category} <span className="font-bold">${product.price}</span></div>
        <p className="">{product.description}</p>
        <div className="font-bold">
          <span className="flex items-center"><GoStarFill />{product.rating.rate}({product.rating.count})</span>
        </div>
        <div className="self-center mt-2">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
