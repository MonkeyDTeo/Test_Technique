import React from "react";
import BillToPayed from "./pages/BillToPayed"
import LoginPage from "./pages/Login";
import BillPayed from "./pages/BillPayed"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BillToPayed />} />
        <Route path='LoginPage' element={< LoginPage />} />
        <Route path='BillPayed' element={< BillPayed />} />
      </Routes>
    </Router>
  );
}

export default App;