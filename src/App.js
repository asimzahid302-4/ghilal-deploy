import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./Global/Topbar";
import Footer from "./Global/Footer";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Home from "./Components/Pages/Home/Hero";
import Products from "./Components/Pages/Products/Products";
import Outlets from "./Components/Pages/Outlets/Outlets";
import OnlineStore from "./Components/Pages/OnlineStore/OnlineStore";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      {/* global topbar */}
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="products" element={<Products />} />
        <Route path="outlets" element={<Outlets />} />
        <Route path="onlinestore" element={<OnlineStore />} />
        <Route path="productdetails" element={<ProductDetails />} />
      </Routes>

      {/* global footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
