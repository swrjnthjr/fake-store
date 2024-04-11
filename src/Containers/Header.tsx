import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const cartProduct = useSelector(
    (state: RootState) => state.cartProduct.product
  );

  const navigate = useNavigate()

  return (
    <div className="border-b px-4 py-2 sticky top-0 bg-slate-300">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h2 onClick={()=>navigate("/")} className="font-bold text-[24px] cursor-pointer">Fake Store</h2>
        <button className="flex justify-center items-center" onClick={()=>navigate("/cart")}><BsCart4 /> ({cartProduct.length})</button>
      </div>
    </div>
  );
};

export default Header;
