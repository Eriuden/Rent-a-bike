import React from "react";
import { useDispatch } from "react-redux";
import { deletebike } from "../redux/actions/bike.action";

export default function DeleteButton(bikeID) {
  const dispatch = useDispatch();
  const destroyBike = () => {
    dispatch(deletebike(bikeID));
  };
  return (
    <div>
      <button onClick={destroyBike()}>Supprimer</button>
    </div>
  );
}
