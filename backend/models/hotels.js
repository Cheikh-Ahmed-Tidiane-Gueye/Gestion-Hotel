const mongoose = require("mongoose");

// Schéma des hotels dans la base de données MongoDB
const hotelsSchema = mongoose.Schema({
  src: String,
  nom: String,
  adresse: String,
  email: String,
  number: Number,
  prix: Number,
  devise: String,
});

const hotelsModel = mongoose.model("hotels", hotelsSchema);
module.exports = hotelsModel;