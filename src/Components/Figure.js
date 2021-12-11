import React from "react";
import { Link } from "react-router-dom";

const Figure = ({ farm }) => {
  return (
    <figure className="card">
      <div className="card__emoji">{farm.image}</div>

      <div className="card__title-box">
        <h2 className="card__title">{farm.productName}</h2>
      </div>

      <div className="card__details">
        {farm.organic && (
          <div className="card__detail-box">
            <h6 className="card__detail card__detail--organic">Organic!</h6>
          </div>
        )}

        <div className="card__detail-box">
          <h6 className="card__detail">{farm.quantity} per 📦</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail card__detail--price">{farm.price}</h6>
        </div>
      </div>

      <Link className="card__link" to={`/farm/${farm.id}`}>
        <span>
          Detail <i className="emoji-right">👉</i>
        </span>
      </Link>
    </figure>
  );
};

export default Figure;
