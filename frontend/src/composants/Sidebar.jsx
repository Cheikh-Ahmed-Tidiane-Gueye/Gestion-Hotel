import React from "react";
// import logo from "../assets/logo/logo.png";
import { MenuSide } from "./Utils";
import SidLink from "./SideLink";
import LogoRedProduct2 from "../composants/LogoRedProduct2";

export default function Sidebar() {
  return (
    <>
      <div className="sidebarContainer">
        <LogoRedProduct2 />
        <p className="ps-5 pricipal">Principal</p>
        <div className="menuSide">
          {MenuSide.map((elem, index) => (
            <SidLink {...elem} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
