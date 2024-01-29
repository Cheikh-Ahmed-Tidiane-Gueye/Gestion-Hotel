import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const SERVER_URL = "/api";

// LogiqueInscription.jsx
export const LogiqueInscription = (data) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formDataInscription, setFormDataInscription] = useState({
    nom: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Regex pour vérifier la validité de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formDataInscription.nom ||
      !formDataInscription.email ||
      !formDataInscription.password
    ) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification de la validité de l'e-mail
    if (!emailRegex.test(formDataInscription.email)) {
      toast.error("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    setIsLoading(true);
    try {
      let data = {
        formDataInscription,
      };

      const response = await axios.post(
        SERVER_URL + "/inscription",
        formDataInscription,
        data
      );

      // console.log(response.data);

      localStorage.setItem("RedProduct", JSON.stringify(data));

      toast.success(
        `Inscription réussie ! Vous pouvez maintenant vous connecter.`
      );
      setFormDataInscription({
        nom: "",
        email: "",
        password: "",
      });

      navigate("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(
        `Inscription échouée : ${
          error.response.data.message ||
          "Une erreur inattendue s'est produite. Veuillez réessayer plus tard."
        }`
      );

      console.error(error.response.data.message);
    }
  };

  return {
    formDataInscription,
    setFormDataInscription,
    handleSubmit,
    isLoading,
  };
};

// LogiqueConnexion.jsx
export const LogiqueConnexion = (data) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formDataConnexion, setFormDataConnexion] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formDataConnexion.email || !formDataConnexion.password) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoading(true);

    try {
      let data = {
        formDataConnexion,
      };

      const response = await axios.post(
        SERVER_URL + "/connexion",
        formDataConnexion,
        data
      );

      console.log(response.data);

      localStorage.setItem("RedProduct", JSON.stringify(data));

      toast.success("Connexion réussie ! Bienvenue sur RedProduct.");

      setFormDataConnexion({
        email: "",
        password: "",
      });

      navigate("/accueil/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(
        "Connexion échouée. Veuillez vérifier votre adresse e-mail et/ou votre mot de passe."
      );
      console.error(error);
    }
  };

  return {
    formDataConnexion,
    setFormDataConnexion,
    handleSubmit,
    isLoading,
  };
};

// LogiqueDeconnexion
export const logOut = () => {
  const SERVER_URL = "https://red-product-tzz8.onrender.com/api/deconnexion";
  try {
    // Appelez votre endpoint de déconnexion ici
    // await axios.post(SERVER_URL);

    // Ensuite, redirigez l'utilisateur vers la page d'accueil
    navigate("/");
  } catch (error) {
    console.error("Erreur lors de la déconnexion", error);
  }
  return {};
};

