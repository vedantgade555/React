import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Nav2 from "./components/Nav2"


const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar></Navbar>
      <Nav2></Nav2>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/courses/:courseId" element={<CourseDetail></CourseDetail>}></Route>
        {/* this is a dynamic route */}
        <Route path="/product" element={<Product></Product>}>
          <Route path="mens" element={<Mens></Mens>}></Route>
          <Route path="womens" element={<Womens></Womens>}></Route>
          <Route path="kids" element={<Kids></Kids>}></Route>

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
