import { Route, Router, Routes, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs.jsx";
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Services from "./pages/Services";
import View from "./pages/View";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import MensCollection from "./category/MensCollection";
import WomensCollection from "./category/WomensCollection";
import BabyCollection from "./category/BabyCollection";
import Main from "./pages/Main";
import ItemDetails from "./pages/ItemDetails";
import Check_Out from "./pages/Check_Out";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment.jsx";
import Account from "./pages/Account";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/mens-collection" element={<MensCollection />} />
        <Route path="/womens-collection" element={<WomensCollection />} />
        <Route path="/baby-collection" element={<BabyCollection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check-out" element={<Check_Out />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<View />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/items/:itemId" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
