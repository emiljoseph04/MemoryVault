import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";  // Navbar
import Footer from "./components/Footer";  // Footer
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateCapsule from "./pages/CreateCapsule";
import CapsuleDetail from "./pages/CapsuleDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createcapsule" element={<CreateCapsule />} />
        <Route path="/capsule/:id" element={<CapsuleDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
