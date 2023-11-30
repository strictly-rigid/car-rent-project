import css from "./CarItem.module.css";

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
  return (
    <div className={css.item_container}>
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
      <button type="button" className={css.btnModal}>
        Learn more
      </button>
    </div>
  );
}
