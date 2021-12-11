import React from "react";
import { Routes, Route } from "react-router-dom";
import CardsContainer from "./Components/CardsContainer";
import FarmDetail from "./Components/FarmDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsContainer />} />
      <Route path="/farmDetail" element={<FarmDetail />} />
    </Routes>
  );
};

export default App;
