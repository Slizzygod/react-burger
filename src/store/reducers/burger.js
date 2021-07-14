import {
  GET_CONSTRUCTOR_INGREDIENTS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_SELECTED_INGREDIENT,
  SET_ORDER_REQUERST,
  SET_ORDER_SUCCESS,
  SET_ORDER_FAILED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  INCREASE_AMOUNT_INGREDIENT,
  REDUCE_AMOUNT_INGREDIENT,
  CHANGE_AMOUNT_BUN,
  ADD_BUN,
} from "../actions/burger";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  constructorIngredients: { bun: null, ingredients: [] },
  selectedIngredient: null,

  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, ingredientsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, ingredients: action.payload };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredients: [],
        ingredientsRequest: false,
      };
    }

    case GET_CONSTRUCTOR_INGREDIENTS: {
      return { ...state };
    }
    case SET_SELECTED_INGREDIENT: {
      return { ...state, selectedIngredient: action.payload };
    }

    case ADD_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients,
          ingredients: [
            ...state.constructorIngredients.ingredients,
            action.payload,
          ],
        },
      };
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients,
          ingredients: [...state.constructorIngredients.ingredients].filter(
            (_ingredient, index) => index !== action.payload
          ),
        },
      };
    }
    case MOVE_INGREDIENT: {
      const ingredients = [...state.constructorIngredients.ingredients];
      const movedIngredients = ingredients.splice(
        action.payload.currentIndex,
        1
      )[0];
      ingredients.splice(action.payload.targetIndex, 0, movedIngredients);

      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients,
          ingredients,
        },
      };
    }

    case INCREASE_AMOUNT_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((ingredient) => {
          if (ingredient._id === action.payload) {
            ingredient.__v += 1;
          }

          return ingredient;
        }),
      };
    }
    case REDUCE_AMOUNT_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((ingredient) => {
          if (ingredient._id === action.payload) {
            ingredient.__v -= 1;
          }

          return ingredient;
        }),
      };
    }

    case CHANGE_AMOUNT_BUN: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((ingredient) => {
          if (ingredient.type === "bun") {
            if (ingredient._id === action.payload) {
              ingredient.__v = 1;
            } else {
              ingredient.__v = 0;
            }
          }

          return ingredient;
        }),
      };
    }

    case ADD_BUN: {
      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients,
          bun: action.payload,
        },
      };
    }

    case SET_ORDER_REQUERST: {
      return { ...state, orderRequest: true };
    }
    case SET_ORDER_SUCCESS: {
      return { ...state, order: action.payload };
    }
    case SET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        order: null,
        orderRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
