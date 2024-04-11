import { FC } from "react";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartProduct } from "../redux/actions/productActions";
import { RootState } from "../redux/store";
import { productType } from "./product.type";

type ProductsCardsProps = {
  product: productType;
};

const ProductsCards: FC<ProductsCardsProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartProducts = useSelector(
    (state: RootState) => state.cartProduct.product
  );

  const isInCart = cartProducts.find(
    (cartProduct: productType) => cartProduct.id == product.id
  );

  const handleAddToCart = (e) => {
    e.stopPropagation(); //  <------ Here is the magic
    dispatch(setCartProduct([...cartProducts, product]));
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();

    const productIndex = cartProducts.findIndex(
      (cartProduct: productType) => cartProduct.id == product.id
    );
    const cartProductsLocal = [...cartProducts];
    cartProductsLocal.splice(productIndex, 1);

    dispatch(setCartProduct(cartProductsLocal));
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`, {
      state: { product },
    });
  };

  const handleNavigateCartClick = (e) => {
    e.stopPropagation();
    navigate(`/cart`);
  };

  return (
    <div
      className="flex flex-col justify-between mr-3 my-2 p-2 border border-gray-600 rounded-lg cursor-pointer"
      onClick={handleCardClick}
      key={product.id}
    >
      <div>
        <img
          className="h-[200px] w-[300px] self-center object-contain bg-blend-color-burn"
          src={product?.image}
          alt={product?.title}
        />
        <div>
          <div className="mt-1">{product?.title}</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          {product?.rating?.rate}{" "}
          {product?.rating?.count ? `(${product?.rating.count})` : ""}
        </div>
        {!isInCart && (
          <button
            className={"self-end text-black rounded px-2 py-1 mt-1 bg-gray-200"}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
        {isInCart && (
          <div className="flex gap-1 justify-center items-center">
            <button
              className={
                "self-end text-black rounded px-2 py-2 mt-1 bg-red-600"
              }
              onClick={handleRemoveFromCart}
            >
              <ImBin />
            </button>
            <button
              className={
                "self-end text-black rounded px-2 py-1 mt-1 bg-gray-200"
              }
              onClick={handleNavigateCartClick}
            >
              Go to cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsCards;
