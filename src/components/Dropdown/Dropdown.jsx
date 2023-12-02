import css from "./Dropdown.module.css";
import carMakes from "../../sources/makes.json";

export default function Dropdown() {
  console.log(carMakes);
  return (
    <div className={css.dropdownContainer}>
      <label htmlFor="dropdown">Car brand</label>
      <select id="dropdown" name="dropdown">
        {carMakes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>
    </div>
  );
}
