import { useState } from "react";

import css from "./CarItem.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function CarItem({ car }) {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={css.itemContainer}>
      <img src={img} alt="car" width="274px" height="268px"></img>
      <div className={css.firstRowCard}>
        <div>
          {make} {model}, {year}
        </div>
        <div>{rentalPrice}</div>
      </div>
      <div className={css.secondRowCard}>
        {address} | {rentalCompany}
      </div>
      <div className={css.thirdRowCard}>
        {type} | {model} | {id} | {functionalities[0]}
      </div>
      <button type="button" className={css.btnModal} onClick={toggleModal}>
        Learn more
      </button>

      {isModalOpen && (
        <ModalWindow
          carItemModal={car}
          isOpenModalToggle={toggleModal}></ModalWindow>
      )}
    </div>
  );
}
