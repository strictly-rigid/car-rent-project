import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "../../redux/operations";

import {
  selectCars,
  selectIsLoading,
  selectCurrentPage,
} from "../../redux/selectors";
import CarItem from "../../components/CarITem/CarItem";
import Dropdown from "../../components/Dropdown/Dropdown";
import css from "./Catalog.module.css";

export default function Catalog() {
  const dispatch = useDispatch();
  const allCars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  // let currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  // const loadMore = () => {
  //   currentPage += 1;
  // };

  return (
    <div>
      <div className={css.dropdownContainer}>
        <Dropdown></Dropdown>
      </div>
      <div className={css.catalogContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          allCars.map((carItem) => (
            <CarItem
              className={css.catalogItem}
              key={carItem.id}
              car={carItem}
            />
          ))
        )}

        <button className={css.btnLoadMore} type="button">
          Load more
        </button>
      </div>
    </div>
  );
}
