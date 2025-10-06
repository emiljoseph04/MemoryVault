import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";  // Navbar
import Footer from "./components/Footer";  // Footer
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateCapsule from "./pages/CreateCapsule";
import CapsuleDetail from "./pages/CapsuleDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createcapsule" element={<CreateCapsule />} />
        <Route path="/capsule/:id" element={<CapsuleDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
