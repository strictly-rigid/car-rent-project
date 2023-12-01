import { useEffect } from "react";

import css from "./ModalWindow.module.css";
// import closeBtn from "../../images/closeBtn.png";
import * as closeBtn from "../../images/closeBtn.png";
// import sprite from "../../images/sprite.svg";

export default function ModalWindow({ carItemModal, isOpenModalToggle }) {
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
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = carItemModal;

  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        isOpenModalToggle();
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
    };
  }, [isOpenModalToggle]);

  useEffect(() => {
    const closeOnBackdrop = (e) => {
      if (e.target.classList.contains(css.modalContainer)) {
        isOpenModalToggle();
      }
    };
    document.addEventListener("click", closeOnBackdrop);
    return () => {
      document.removeEventListener("click", closeOnBackdrop);
    };
  }, [isOpenModalToggle]);

  const conditionsArr = rentalConditions.split("\n");
  return (
    <div className={css.modalContainer}>
      <div className={css.modalWindow}>
        <div className={css.itemContainer}>
          <button
            type="button"
            className={css.btnModalClose}
            onClick={() => isOpenModalToggle()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>{" "}
            </svg>
          </button>
          <img src={img} alt="car" width="461px" height="248px"></img>
          <div className={css.firstRowCard}>
            {make} {model}, {year}
          </div>
          <div className={css.secondRowCard}>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </div>
          <p>{description}</p>
          <p>Accessories and functionalities:</p>
          <div>
            <p>{accessories.map((item) => ` ${item} | `)}</p>
          </div>
          <div>
            <p>{functionalities.map((item) => ` ${item} | `)}</p>
          </div>
          <p>Rental Conditions:</p>
          <div className={css.rentalConditions}>
            {conditionsArr.map((item) => (
              <p className={css.condition}>{item}</p>
            ))}
            <p className={css.condition}>Mileage: {mileage}</p>
            <p className={css.condition}>Price: {rentalPrice}</p>
          </div>
          <button type="button" className={css.rentalCarBtn}>
            Rental car
          </button>
        </div>
      </div>
    </div>
  );
}
