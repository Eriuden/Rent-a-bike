import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatebike } from "../redux/actions/bike.action";

export default function UpdateBikeForm(bike) {
  const [text, setText] = useState(false);
  const [edit, setEdit] = useState(false);
  const [pics, setPics] = useState(false);
  const [desc, setDesc] = useState(false);
  const [rentPrice, setRentPrice] = useState(false);
  const [kilometers, setKilometers] = useState(false);
  const dispatch = useDispatch();

  const editBike = (e) => {
    e.preventDefault();

    //Avec useDispatch, on peut accéder a la fonction dispatch de Redux, c'est pourquoi on appelle d'abord la variable où il est contenue
    //Puis l'action , avec en paramètres les éléments postId (le nom de la props lors de l'appel du composant dans CardComment)
    //, pour savoir quel est le post du comment, puis l'id du comment pour le trouver, puis le text pour le modifier
    if (text || pics || desc || rentPrice || kilometers) {
      dispatch(updatebike(bike, text, pics, desc, rentPrice, kilometers));
      setText("");
      setPics("");
      setDesc("");
      setRentPrice("");
      setKilometers("");
      setEdit(false);
    }
  };
  return (
    <div className="edit-bike flex-col">
      {
        /* Reste à compléter, changer noms hooks */ edit && (
          <form action="" onSubmit={editBike}>
            <input
              type="text"
              name="name"
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="file"
              name="pics"
              onChange={(e) => setPics(e.target.value)}
            />
            <input
              type="text"
              name="description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              type="text"
              name="rentprice"
              onChange={(e) => setRentPrice(e.target.value)}
            />
            <input
              type="text"
              name="kilometers"
              onChange={(e) => setKilometers(e.target.value)}
            />

            <input type="submit" value="valider les modifications" />
          </form>
        )
      }
    </div>
  );
}