import { dataService } from "../../shared/services/data.service";
import { spaceUrl } from "../../shared/utils/consts";

const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

const GET_CONSTRUCTOR_INGREDIENTS = "GET_CONSTRUCTOR_INGREDIENTS";
const SET_SELECTED_INGREDIENT = "GET_SELECTED_INGREDIENT";

const SET_ORDER_REQUERST = "SET_ORDER_REQUERST";
const SET_ORDER_SUCCESS = "SET_ORDER_SUCCESS";
const SET_ORDER_FAILED = "SET_ORDER_FAILED";

const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
const MOVE_INGREDIENT = "MOVE_INGREDIENT";
const REMOVE_INGREDIENTS = "REMOVE_INGREDIENTS";

const INCREASE_AMOUNT_INGREDIENT = "INCREASE_AMOUNT_INGREDIENT";
const REDUCE_AMOUNT_INGREDIENT = "REDUCE_AMOUNT_INGREDIENT";
const DISCARD_AMOUNT_INGREDIENTS = "DISCARD_AMOUNT_INGREDIENTS";

const CHANGE_AMOUNT_BUN = "CHANGE_AMOUNT_BUN";

const ADD_BUN = "ADD_BUN";

const getIngredients = () => {
  return (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    dataService
      .get(`${spaceUrl}/api/ingredients`)
      .then((requestData) => {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: requestData });
      })
      .catch((error) => {
        dispatch({ type: GET_INGREDIENTS_FAILED });
        dataService.onError(error);
      });
  };
};

const setOrder = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_ORDER_REQUERST });
    dataService
      .post(`${spaceUrl}/api/orders`, { ingredients: data })
      .then((requestData) => {
        dispatch({
          type: SET_ORDER_SUCCESS,
          payload: requestData.order.number,
        });
        dispatch({
          type: REMOVE_INGREDIENTS,
          payload: { bun: null, ingredients: [] },
        });
        dispatch({ type: DISCARD_AMOUNT_INGREDIENTS });
      })
      .catch((error) => {
        dispatch({ type: SET_ORDER_FAILED });
        dataService.onError(error);
      });
  };
};

export {
  getIngredients,
  setOrder,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_CONSTRUCTOR_INGREDIENTS,
  SET_SELECTED_INGREDIENT,
  SET_ORDER_REQUERST,
  SET_ORDER_SUCCESS,
  SET_ORDER_FAILED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENTS,
  INCREASE_AMOUNT_INGREDIENT,
  REDUCE_AMOUNT_INGREDIENT,
  DISCARD_AMOUNT_INGREDIENTS,
  CHANGE_AMOUNT_BUN,
  ADD_BUN,
};
