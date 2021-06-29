import superagent from "superagent";

const myApi = "https://nihad-api-server.herokuapp.com/product";

export const getRemoteData = () => (dispatch, state) => {
  superagent.get(myApi).then((res) => {
    dispatch(getAction(res.body));
  });
};

// export const deleteRemoteData = (id) => (dispatch, state) => {
//   superagent.delete(`${myApi}/${id}`).then((res) => {
//     dispatch(deleteAction(res.body));
//   });
// };

export const updateRemoteData = (item) => (dispatch, state) => {
  console.log(item);
  superagent
    .put(`${myApi}/${item._id}`)
    .send({
      inventoryCount: item.inventoryCount - 1,
      cartCount: item.cartCount + 1,
    })
    .then((res) => {
      dispatch(putAction(res.body));
    });
};

export const updateRemoteDataAfterDeleteFromCart =
  (id, inventoryCount, cartCount) => (dispatch, state) => {
    superagent
      .put(`${myApi}/${id}`)
      .send({
        inventoryCount: cartCount + inventoryCount,
        cartCount: 0,
      })
      .then((res) => {
        dispatch(putActionToRemoveFromCart(res.body));
      });
  };

export const getAction = (payload) => {
  return {
    type: "GET",
    payload: payload,
  };
};

export const putAction = (payload) => {
  return {
    type: "PUT",
    payload: payload,
  };
};

export const putActionToRemoveFromCart = (payload) => {
  return {
    type: "PUT_REMOVE",
    payload: payload,
  };
};

// export const deleteAction = (payload) => {
//   return {
//     type: "DELETE",
//     payload: payload,
//   };
// };
