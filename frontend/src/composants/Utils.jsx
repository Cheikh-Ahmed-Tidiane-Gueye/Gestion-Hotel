import { BiSolidDashboard } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";
import { TbLetterPSmall } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";



// données liste de menue
export const MenuSide = [
  {
    style: { cursor: "pointer" },
    iconSide: <BiSolidDashboard className="ico" />,
    textSide: "Dashboard",
    to: "/accueil/dashboard",
  },
  {
    style: { cursor: "pointer" },
    iconSide: <BsCardList className="ico" />,
    textSide: "Liste des hotels",
    to: "/accueil/hotel",
  },
];

// Données Cartes du Dashboars
export const CardDatas = [
  {
    cardColor: `#A88ADD`,
    icon: IoMdMailOpen,
    iconClasses: "",
    count: "125",
    label: "Formulaires",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#0CC2AA`,
    icon: TbLetterPSmall,
    iconClasses: "",
    count: "40",
    label: "Messages",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#FCC100`,
    icon: HiUsers,
    iconClasses: "",
    count: "600",
    label: "Utilisateurs",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#F90000`,
    icon: IoMdMailOpen,
    iconClasses: "",
    count: "25",
    label: "E-mail",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#9C27B0`,
    icon: TbLetterPSmall,
    iconClasses: "",
    count: "40",
    label: "Hotels",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#1565C0`,
    icon: HiUsers,
    iconClasses: "",
    count: "02",
    label: "Eleves",
    description: "Ici la description de ma carte",
  },
];

// Données formulaire de connection
export const inputFieldsDataConnexion = [
  {
    type: "email",
    id: "email2",
    name: "email",
    placeholder: "E-mail",
    className: "myInput mb-3",
  },
  {
    type: "password",
    id: "password2",
    name: "password",
    placeholder: "Mot de passe",
    className: "myInput mb-3",
  },
  {
    type: "checkbox",
    id: "Check2",
    className: "myInput form-check-input myform-check-input me-3 border",
    label: (
      <label className="mb-2 form-check-label" htmlFor="exampleCheck2">
        Garder-moi connecté
      </label>
    ),
  },
];

// Données formulaire d'inscription
export const inputFieldsDataInscription = [
  {
    type: "text",
    id: "nom",
    name: "nom", 
    className: "myInput mb-3",
    placeholder: "Nom",
  },
  {
    type: "email",
    id: "email1",
    name: "email",
    placeholder: "E-mail",
    className: "myInput mb-3",
  },
  {
    type: "password",
    id: "password1",
    name: "password",
    placeholder: "Mot de passe",
    className: "myInput mb-3",
  },
  {
    type: "checkbox",
    id: "Check1",
    className: "myInput form-check-input myform-check-input me-3 border",
    label: (
      <label className="mb-2 form-check-label" htmlFor="exampleCheck1">
        Accepter les termes et la politique
      </label>
    ),
  },
];
// Données formulaire d'inscri^ption
export const inputFieldsDataModal = [
  {
    type: "text",
    id: "Nom",
    name: "nom",
    className: "myInputModal col-lg-4 col-md-5 col-sm-12",
    placeholder: "Nom de l'hotel",
  },
  {
    type: "text",
    id: "adresse",
    name: "adresse",
    className: "myInputModal col-lg-4 col-md-5 col-sm-12",
    placeholder: "Addresse",
  },
  {
    type: "text",
    id: "Email",
    name: "email",
    className: "myInputModal col-lg-4 col-md-5 col-sm-12",
    placeholder: "E-mail",
  },
  {
    type: "number",
    id: "number",
    name: "number",
    className: "myInputModal col-lg-4 col-md-5 col-sm-12",
    placeholder: "Numéro de telephone",
  },
  {
    type: "select",
    id: "prix",
    name: "prix",
    className: "myInputModal col-lg-4 col-md-5 col-sm-12",
    placeholder: "Prix par nuit",
  },
  {
    type: "text",
    id: "devise",
    name: "devise",
    className: "myInputModal col-lg-4 col-md-5 col-sm-12",
    placeholder: "Devise",
  },
];

// Données cates d'hotels
export const CardHotelDatas = [
  {
    src: "",
    adresse: "Boulevard Martin Luther King Dakar, 11500",
    nom: "Hôtel Terrou-Bi",
    prix: "25.000 XOF par nuit",
    className: "col-lg-3 col-md-5 col-sm-9 col-xs-12 px-0 px-sx-3"
  },
  {
    src: "",
    adresse: "Rte des Almadies, Dakar",
    nom: "King Fahd Palace",
    prix: "20.000 XOF par nuit",
  },
  {
    src: "",
    adresse: "Rte de la Corniche O, Dakar 16868",
    nom: "Radisson Blu Hotel",
    prix: "22.000 XOF par nuit",
  },
  {
    src: "",
    adresse: "Place de l'Independance, 10 Rue PL 29, Dakar",
    nom: "Pullman Dakar Teranga",
    prix: "30.000 XOF par nuit",
  },
  {
    src: "",
    adresse: "Lac Rose, Dakar",
    nom: "Hôtel Lac Rose",
    prix: "25.000 XOF par nuit",
  },
  {
    src: "",
    adresse: "Mbour, Sénégal",
    nom: "Hôtel Saly",
    prix: "20.000 XOF par nuit",
  },
  {
    src: "",
    adresse: "BP64, Saly 23000",
    nom: "Palm Beach Resort & Spa",
    prix: "22.000 XOF par nuit",
  },
  {
    src: "",
    adresse: "Place de l'Independance, 10 Rue PL 29, Dakar",
    nom: "Pullman Dakar Teranga",
    prix: "30.000 XOF par nuit",
  },
];