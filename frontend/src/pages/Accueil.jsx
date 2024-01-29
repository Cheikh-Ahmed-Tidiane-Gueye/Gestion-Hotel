import React from "react";
import { Outlet } from "react-router-dom";
import MonNavbar from "../composants/MonNavbar";
import Sidebar from "../composants/Sidebar";

export default function Accueil() {
  return (
    <div className="grid-container">
      <div className="Sidebar">
        <Sidebar/>
      </div>
      <div className="Leftbar">
        <MonNavbar className="monNavbar" />
        <div className="Outlet">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}