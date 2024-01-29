import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../composants/CustomButton";
import LogoRedProduct from "../composants/LogoRedProduct";
import ConnectInput from "../composants/inputFields";

export default function ForgotPassword() {
  
  return (
    <>
      <div className="ConnexionContainer d-flex justify-content-center align-items-center">
        <div className="form">
          <LogoRedProduct />
          <form action="" className="formConnect d-flex flex-column p-5 mx-4">
            <p className="p3 mb-4">Mot de passe oublié ?</p>
            <p className="p4 mb-3"></p>
            <div className="d-flex flex-column mb-3">
              <label className="mb-1">Votre e-mail</label>
              <ConnectInput
                type="email"
                id="exampleInputEmail3"
                placeholder="E-mail"
                className="myInput mb-5"
              />
            </div>
            <CustomButton label="Envoyer" className="connexionB" />
          </form>
          <center>
            <p className="p3 my-3" style={{ color: "white" }}>
              Revenir à la
              <Link to="/" className="Link">
                <span className="p2 ms-2" style={{ color: "#FFD964" }}>
                  connexion
                </span>
              </Link>
            </p>
          </center>
        </div>
      </div>
    </>
  );
}
