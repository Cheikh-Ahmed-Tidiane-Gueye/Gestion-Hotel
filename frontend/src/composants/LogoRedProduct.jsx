import React from "react";

import logo from "../assets/logo/logo.png";

const LogoRedProduct = () => {
  return (
    <span className="Logo d-flex justify-content-center alinn-items-center text-light my-4">
      <img src={logo} alt="logo Red Product" className="iconLogo me-md-3 me-sm-0 mt-0" />
      <h4 className="">
        RED PRODUCT
      </h4>
    </span>
  );
};

export default LogoRedProduct;