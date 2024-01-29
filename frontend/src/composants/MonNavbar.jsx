import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { Badge } from "react-bootstrap";
import profil from '../assets/img/Cheikh.jpg'
import { useLocation, useNavigate } from "react-router-dom";



export default function MonNavbar() {
  // const navigate = useNavigate();
  const [notificationCount, setNotificationCount] = useState(0);
  const location = useLocation();
  const isDashboard = location.pathname === "/accueil/dashboard";
  const pageTitle = isDashboard ? "Dashboard" : "Liste des hôtels";

  return (
    <>
      <Navbar
        expand="lg"
        className="monNavbar navbar navbar-expand-lg"
        style={{ backgroundColor: "white", height: "10%" }}
      >
        <div className="container-fluid" style={{ backgroundColor: "white" }}>
          <Navbar.Brand href="#">
            <h2 className="DH2">{pageTitle}</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScrol" className="justify-content-end">
            <Form
              className="d-flex align-items-center border border-2 rounded-pill my-2"
              style={{ width: "320px" }}
            >
              <span
                className="mx-2 mb-1"
                style={{ color: "gray", fontSize: "25px" }}
              >
                <CiSearch />
              </span>
              <input
                type="search"
                placeholder="Rechercher"
                className="search me-2 my-1 border-0"
                aria-label="Recherche"
                style={{ width: "320px" }}
              />
            </Form>
            <CiBellOn className="icon ms-2 mt-2" />
            <Badge
              bg="warning"
              className="notification-badge rounded-circle mb-4"
            >
              {notificationCount}
            </Badge>
            <span className="profil mx-4">
              <img
                src={profil}
                alt=""
                className="rounded-circle"
                style={{ width: "45px", height: "45px" }}
              />
            </span>
            <FiLogOut className="icon mx-2" onClick={"logOut"}/>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
