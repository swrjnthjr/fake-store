import { useEffect } from "react";
import { ImBin } from "react-icons/im";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { setTitle } from "../utils/HeaderTitle";
import { productType } from "./product.type";

const Cart = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cartProduct.product
  );
  useEffect(() => {
    setTitle(`Cart(${cartProducts.length})`);
  }, []);
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };

  if (cartProducts.length == 0) {
    return (
      <div className="flex justify-center flex-col my-auto h-40">
        <h2 className="text-center text-2xl">You have no item in cart</h2>
        <button onClick={handleNavigateHome}>View Items</button>
      </div>
    );
  }

  return (
    <section className="max-w-5xl m-auto mt-4">
      <div className="flex justify-end items-end sticky top-16">
        <button className="rounded bg-green-700 font-bold px-2 py-1">Checkout</button>
      </div>
      <div>
        {cartProducts.map((cartProduct: productType) => {
          return (
            <div key={cartProduct.id} className="flex gap-4 mb-3 pb-3 border-b">
              <img src={cartProduct.image} height={200} width={150} />
              <div className="flex flex-col justify-between h-auto ">
                <div>
                  <h2 className="text-xl font-semibold">{cartProduct.title}</h2>
                  <div className="">{cartProduct.description}</div>
                  <span>${cartProduct.price}</span>
                </div>
                <button className="self-end bg-red-600 px-2 py-1 rounded">
                  <ImBin />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
