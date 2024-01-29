const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/inscription", authController.inscriptionUtilisateurs);
router.post("/connexion", authController.connexionUtilisateurs);
router.post("/deconnexion", authController.deconnexionUtilisateurs);
router.post("/ajouthotel", authController.ajouthotel);
router.get("/hotels", authController.getHotels);


module.exports = router;