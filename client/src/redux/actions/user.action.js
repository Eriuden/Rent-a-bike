import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE"
export const GET_USER_ERRORS ="GET_USER_ERRORS"

export const uploadPicture = (data,id) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/users/upload`, data)
            .then((res) => {
                if (res.data.errors) {
                    dispatch({ type: GET_USER_ERRORS, payload: res.data.errors})
                } else {
                    dispatch ({ type: GET_USER_ERRORS, payload:""})
                    return axios
                    .get(`${process.env.REACT_APP_API_URL}api/users/${id}`)
                    .then((res) => {
                        dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture})
                    })
                } 
            })
            .catch((err) => console.log(err))
        }
}

export const getUser = (uid) => {
  return (dispatch) => {
    return (
      axios
        //dans le cas d'un get, le param est entres accolades
        .get(`${process.env.REACT_APP_API_URL}api/users/${uid}`)
        .then((res) => {
          dispatch({ type: GET_USER, payload: res.data });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/users`)
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = (userId, name, password, bio) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/users/${userId}`,
      data: { name, password, bio },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_USER,
          payload: { name, password, bio, userId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (userId, name, password, bio) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/users/${userId}`,
      data: { name, password, bio },
    })
      .then((res) => {
        dispatch({ type: DELETE_USER, payload: { userId } });
      })
      .catch((err) => console.log(err));
  };
};