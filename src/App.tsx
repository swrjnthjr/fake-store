import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Containers/Header";
import Products from "./Containers/Products";
import ProductsDetails from "./Containers/ProductsDetails";
import Cart from "./Containers/Cart.tsx";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/product/:productId" element={<ProductsDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
