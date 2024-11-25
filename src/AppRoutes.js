import { Route, Routes } from "react-router-dom";
import Default from "./page-layout/Default";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
