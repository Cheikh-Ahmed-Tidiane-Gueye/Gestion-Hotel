import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import ForgotPassword from "./pages/ForgotPassword";
import Accueil from "./pages/Accueil";
import Dashboard from "./pages/Dashboard";
import ListeHotel from "./pages/ListeHotel";
import Modal from "./composants/Modal";

export default function App() {

  const rooter = createBrowserRouter([
    {
      path: "/",
      element: <Connexion />,
    },
    {
      path: "/inscription",
      element: <Inscription />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/accueil",
      element: <Accueil />,
      children: [
        {
          path: "/accueil/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/accueil/hotel",
          element: <ListeHotel />,
        },
      ],
    },
    {
      path: "/modal",
      element: <Modal/>
    }
  ]);
  return (
    <>
      
      <RouterProvider router={rooter} />
    </>
  );
}