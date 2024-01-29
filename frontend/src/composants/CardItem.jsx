// CardItem.jsx
import React from "react";

export default function CardItem(
    {  cardColor, icon, iconClasses, count, label, description,}
) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-0">
      {/* Cards */}
      <div className="cards bg-light">
        <div
          className="cardProfil"
          style={{ background: `${cardColor}` }}
        >
          {icon &&
            React.createElement(icon, {
              className: `img-card ${iconClasses}`,
            })}
        </div>
        <div className="cardLibeller">
          <h5 className="m-0">
            <span className="count fw-bold">{count}</span> {label}
          </h5>
          <p className="m-0">{description}</p>
        </div>
      </div>
      {/* Fin Cards */}
    </div>
  );
}
