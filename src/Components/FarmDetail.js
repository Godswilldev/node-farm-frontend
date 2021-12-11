import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Farmdetails.css";
const FarmDetail = () => {
  const { id } = useParams();
  const [farm, setFarm] = useState([]);

  useEffect(() => {
    const getFarm = async () => {
      const { data } = await axios.get(`http://localhost:5000/farm/${id}`);
      setFarm(data);
    };
    getFarm();
  }, [id]);

  return (
    <figure class="product">
      {farm.organic && (
        <div class="product__organic">
          <h5>Organic</h5>
        </div>
      )}
      <Link to="/" class="product__back">
        <span class="emoji-left">👈</span>Back
      </Link>
      <div class="product__hero">
        <span class="product__emoji product__emoji--1">{farm.image}</span>
        <span class="product__emoji product__emoji--2">{farm.image}</span>
        <span class="product__emoji product__emoji--3">{farm.image}</span>
        <span class="product__emoji product__emoji--4">{farm.image}</span>
        <span class="product__emoji product__emoji--5">{farm.image}</span>
        <span class="product__emoji product__emoji--6">{farm.image}</span>
        <span class="product__emoji product__emoji--7">{farm.image}</span>
        <span class="product__emoji product__emoji--8">{farm.image}</span>
        <span class="product__emoji product__emoji--9">{farm.image}</span>
      </div>
      <h2 class="product__name">{farm.productName}</h2>
      <div class="product__details">
        <p>
          <span class="emoji-left">🌍</span> From {farm.from}
        </p>
        <p>
          <span class="emoji-left">❤️</span> {farm.nutrients}
        </p>
        <p>
          <span class="emoji-left">📦</span> {farm.quantity}
        </p>
        <p>
          <span class="emoji-left">🏷</span> {farm.price}€
        </p>
      </div>

      <Link to="#" class="product__link">
        <span class="emoji-left">🛒</span>
        <span>Add to shopping card ({farm.price}€)</span>
      </Link>

      <p class="product__description">{farm.description}</p>
    </figure>
  );
};

export default FarmDetail;
