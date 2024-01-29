import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function SideLink({ to, iconSide, textSide }) {
  const location = useLocation();

  // Ajoutez une classe active si le chemin correspond à la propriété to
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`sidelink fw-bold text-decoration-none ${
        isActive ? "active" : ""
      }`}
    >
      <div className="iconSide">{iconSide}</div>
      <p className="textSide m-0">{textSide}</p>
    </Link>
  );
}
