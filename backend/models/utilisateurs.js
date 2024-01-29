const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schéma des utilisateurs dans la base de données MongoDB
const utilisateurSchema = mongoose.Schema({
  nom: String,
  email: String,
  password: {
    type: String,
    required: true,
  },
});


// Methode pour archurer le mot de passe 
utilisateurSchema.pre("save", async function (next) {
  const utilisateurs = this;
  if (!utilisateurs.isModified) return next()
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(utilisateurs.password, salt)
  utilisateurs.password = hash;
  next();
});

// compare le mot de passe saisit par l'utilisateur avec celui dans la bd
utilisateurSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

// export le model
const utilisateursModel = mongoose.model("utilisateurs", utilisateurSchema);
module.exports = utilisateursModel;
