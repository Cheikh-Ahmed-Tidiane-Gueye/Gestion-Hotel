import React, { useState, useEffect   } from "react";
import CustomButton from "../composants/CustomButton";
import { AiOutlinePlus } from "react-icons/ai";
import CardHotel from "../composants/CardHotel";
import { CardHotelDatas } from "../composants/Utils";
import Modal from "../composants/Modal";
import axios from "axios";

const SERVER_URL = "/api";
export default function ListeHotel() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [hotelList, setHotelList] = useState([]);
  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await axios.get(`${SERVER_URL}/hotels`);
      if (response.data) {
        setHotelList(response.data);
      }
    };

    fetchHotels();
  }, []);

  // Fonction pour ajouter un nouvel hôtel à la liste
  const addHotelToList = async (newHotel) => {
    setHotelList([...hotelList, newHotel]);

    // Appeler la route pour récupérer les données mises à jour
    const response = await axios.get(SERVER_URL + "/hotels");
    if (response.data) {
      // Mettez à jour la liste des hôtels avec les nouvelles données
      setHotelList(response.data);
    }
  };

  return (
    <>
      <div className="hotelContainer">
        <div className="titre">
          <h1 className="titreHotel fw-bold">
            Hotel <span className="fw-lighter">{8}</span>
          </h1>
        </div>
        <CustomButton
          icon={<AiOutlinePlus />}
          label=" Créer un nouveau hôtel"
          className="addHotel"
          classNameLabel="plus"
          onClick={handleModalToggle}
        />
      </div>
      {isModalVisible && (
        <Modal onClose={handleModalToggle} onAddHotel={addHotelToList} />
      )}
      <div className="CardContainer container-fluid">
        <div
          className="CardRow row d-flex
          justify-content-md-start
          justify-content-sm-center
          align-items-center"
        >
          {hotelList.map((item, index) => (
            <CardHotel {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
