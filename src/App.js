import React from "react";
import "./styles/style.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
