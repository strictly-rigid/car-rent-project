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

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or message
  }

  if (!Array.isArray(allCars)) {
    return <div>Error: Invalid data</div>; // Adjust this based on your error handling logic
  }

  console.log(allCars);
  return (
    <div>
      {allCars.map((carItem) => (
        <CarItem key={carItem.id} car={carItem} />
      ))}
    </div>
  );
}
