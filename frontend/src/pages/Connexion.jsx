import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../composants/CustomButton";
import LogoRedProduct from "../composants/LogoRedProduct";
import { inputFieldsDataConnexion } from "../composants/Utils";
import ConnectInput from "../composants/inputFields";
import { LogiqueConnexion } from "../services/LogiquesAuthentification";

export default function Connexion() {
  const { formDataConnexion, setFormDataConnexion, handleSubmit, isLoading } =
    LogiqueConnexion();

  return (
    <>
      <div className="ConnexionContainer d-flex justify-content-center align-items-center">
        <div className="form">
          <LogoRedProduct />
          <form
            onSubmit={handleSubmit}
            action=""
            className="formConnect d-flex flex-column p-5 mx-4"
          >
            <p className="p1 mb-5">Connectez-vous en tant qu'admin</p>
            {inputFieldsDataConnexion.map((field, index) => (
              <div key={index} className="mb-4">
                <ConnectInput
                  {...field}
                  value={formDataConnexion[field.name]}
                  onChange={(e) =>
                    setFormDataConnexion({
                      ...formDataConnexion,
                      [field.name]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
            <CustomButton
              label={isLoading ? "Connexion en cour ..." : "Se connecter"}
              className="connexionB"
              disabled={isLoading}
            />
          </form>
          <center>
            <Link to="/forgotpassword" className="Link">
              <p className="p2 mt-4 mb-5" style={{ color: "#FFD964" }}>
                Mot de passe oublié ?
              </p>
            </Link>

            <p className="p2" style={{ color: "white" }}>
              Vous n'avez pas de compte?
              <Link to="/Inscription" className="Link">
                <span className="p2 ms-2" style={{ color: "#FFD964" }}>
                  S'inscrire
                </span>
              </Link>
            </p>
          </center>
        </div>
      </div>
    </>
  );
}
