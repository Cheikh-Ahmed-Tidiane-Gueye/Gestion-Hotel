import React from "react";
import CardItem from "../composants/CardItem";
import { CardDatas } from "../composants/Utils";


export default function Dashboard() {
  return (
    <>
      <div className="dashboardContainer">
        <h2 className="">Bienvenue sur RED Product</h2>
        <p className="m-0">Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className="CardContainer container-fluid">
        <div className="CardRow row">
          {/* Début Cards */}
          {CardDatas.map((item, index) => (
            <CardItem {...item} key={index} />
          ))}
          {/* Fin Cards */}
        </div>
      </div>
    </>
  );
}
