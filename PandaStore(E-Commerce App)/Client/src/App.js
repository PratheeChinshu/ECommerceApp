import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs.js";
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Services from "./pages/Services";
import View from "./pages/View"
import Shop from "./pages/Shop"
import Categories from "./pages/Categories";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />  
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<View/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/update/:id" element={<Update/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;