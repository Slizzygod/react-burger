import React from "react";

import { useDispatch } from "react-redux";

import { useDrag, useDrop } from "react-dnd";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../../shared/utils/types";

import {
  REDUCE_AMOUNT_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
} from "../../../store/actions/burger";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./scroll-element.module.css";

function ScrollElement({ ingredient, index }) {
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { index },
  });

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      onDropHandler(itemId);
    },
  });

  const onDropHandler = (itemId) => {
    dispatch({
      type: MOVE_INGREDIENT,
      payload: { currentIndex: itemId.index, targetIndex: index },
    });
  };

  const onDeleteIngredient = (ingredientIndex, id) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: ingredientIndex });
    dispatch({ type: REDUCE_AMOUNT_INGREDIENT, payload: id });
  };

  return (
    <li ref={dropTarget}>
      <div ref={dragRef} className={styles.scroll_element}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={() => onDeleteIngredient(index, ingredient._id)}
        />
      </div>
    </li>
  );
}

ScrollElement.propTypes = {
  ingredient: PropTypes.shape(INGREDIENT_TYPE).isRequired,
  index: PropTypes.number.isRequired,
};

export default ScrollElement;
