import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import ForgotPassword from "./pages/ForgotPassword";
import Accueil from "./pages/Accueil";
import Dashboard from "./pages/Dashboard";
import ListeHotel from "./pages/ListeHotel";
import Modal from "./composants/Modal";

export default function App2() {
  return (
    <Router>
      <Routes>
        <Route index element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/accueil" element={<Accueil />}>
          <Route path="/accueil/dashboard" element={<Dashboard />} />
          <Route path="/accueil/hotel" element={<ListeHotel />} />
        </Route>
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
}
