import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import HomePage from "./Pages/HomePage";
import AddProductPage from "./Pages/AddProductPage";
import NotFoundPage from "./Pages/NotFoundPage";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AddProduct" element={<AddProductPage/>}/>
        <Route path="/ProductDetails" element={<AddProductPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
