import axios from "axios";

export const GET_ALLBIKES = "GET_ALLBIKES";
export const GET_BIKE = "GET_BIKE";
export const GET_BIKE_ERRORS = "GET_BIKE_ERRORS";
export const UPDATE_BIKE = "UPDATE_BIKE";
export const DELETE_BIKE = "DELET_BIKE";

/*
 Les explications dont je parlais en reducer
 On exporte déjà chacune, le nom de const en majuscule
 la valeur sera une string reprenant le nom
 ca servira pour le type, (le fameux action.type en param du reducer)
 Du coup, pour chaque action
 export const nomquondonne
 return(dispatch) fonction fléchée
 return axios (l'ajax de react)
 .l'opération à effectuer en axios (get, post, put, delete, patch)
 on lui donne l'url
 .then(donc on lui demande une promesse)
 on met toujours en param de then res
 on dispatch le type, donc la const à string en haut
 le payload est ce que vise l'action
 par ex pour get, on lui demande les données du résultat
 update, il doit modifier les champs donc va les viser
 et delete, il vise l'id pour repérer et supprimer

*/

export const getbikes = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/bikes`)
      .then((res) => {
        dispatch({ type: GET_ALLBIKES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getbike = () => {
  return (dispatch) => {
    return axios

      .get(`${process.env.REACT_APP_API_URL}api/bikes/:id`)
      .then((res) => {
        dispatch({ type: GET_BIKE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addbike = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/bikes/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_BIKE_ERRORS, payload: res.data.errors });
        }
      });
  };
};

export const updatebike = (
  bikeId,
  picture,
  name,
  description,
  rentPrice,
  kilometers
  
) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/bikes/${bikeId}`,
      data: { description },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_BIKE,
          payload: { picture, name, description, rentPrice, kilometers},
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deletebike = (
  bikeId,
  picture,
  name,
  description,
  rentPrice,
  kilometers
) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/bike/${bikeId}`,
      data: { picture, name, description, rentPrice, kilometers },
    })
      .then((res) => {
        dispatch({ type: DELETE_BIKE, payload: { bikeId } });
      })
      .catch((err) => console.log(err));
  };
};