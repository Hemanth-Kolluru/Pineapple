import React from "react";
import Header from "./assets/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cut_the_rope from "./assets/pages/Cut_the_rope";
import Login from "./assets/components/Login";
import Home from "./assets/components/Home";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header /><Home /><Footer /></>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/cut_the_rope" element={<><Header /><Cut_the_rope /></>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App