import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "../../redux/operations";

import { selectCars, selectIsLoading } from "../../redux/selectors";
import CarItem from "../../components/CarITem/CarItem";

export default function Catalog() {
  const dispatch = useDispatch();
  const allCars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  console.log(allCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(allCars);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        allCars.map((carItem) => <CarItem key={carItem.id} car={carItem} />)
      )}
    </div>
  );
}
