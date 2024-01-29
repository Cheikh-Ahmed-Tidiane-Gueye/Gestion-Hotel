import React from 'react'

export default function CardHotel({src, adresse, nom, prix, devise}) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-8 col-xs-12 px-0 px-sx-3">
      <div className="hotelCard">
        <div className="imgHotel">
          <img src={src} alt="image hotel" className="w-100 h-100" />
        </div>
        <div className="">
          <p className="adresse">{adresse}</p>
          <h3 className="nomHotel">{nom}</h3>
          <p className="prixHotel">
            {prix} {devise} par nuit
          </p>
        </div>
      </div>
    </div>
  );
}
