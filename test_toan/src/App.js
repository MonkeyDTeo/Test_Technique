import React from "react";
import Home from "./components/HomePage/HomePage"
import LoginPage from "./components/LoginPage/LoginPage";
import BillToPay from "./components/HomePage/BillToPay"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='LoginPage' element={< LoginPage />} />
        <Route path='BillToPay' element={< BillToPay />} />
      </Routes>
    </Router>
  );
}

export default App;