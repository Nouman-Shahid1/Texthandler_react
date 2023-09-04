import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./modules/HomePage/HomePage";
import Navbar from "./Components/Navbar";
import { AboutPage } from "./modules/AboutPage/AboutPage";
import { ContactPage } from "./modules/ContactPage/ContactPage";
// import Footer from './Components/Footer';
import LoginPage from "./modules/LoginPage/LoginPage";
import { SignUp } from "./modules/LoginPage/SignUp";
import { JewelleryPage } from "./modules/JewlaryPage/JewllaryPage";

const App = () => {
  return (
    <div>
      <div
        className=" h-screen relative bg-cover bg-bottom-right bg-no-repeat"
        style={{ backgroundImage: "url(../images/hero-bg.png)" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jewellery" element={<JewelleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default App;
