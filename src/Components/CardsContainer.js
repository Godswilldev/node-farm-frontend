import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Figure from "./Figure";

const CardsContainer = () => {
  const [farms, setFarms] = useState();

  const getFarms = async () => {
    const { data } = await axios.get("http://localhost:5000/farm");
    setFarms(data);
  };
  useEffect(() => {
    getFarms();
  }, []);

  return (
    <div className="container">
      <h1>🌽 Node Farm 🥦</h1>
      <div className="cards-container">
        {farms?.map((farm) => (
          <div key={farm.id}>
            <Figure farm={farm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
