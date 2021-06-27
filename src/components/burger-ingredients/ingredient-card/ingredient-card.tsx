import React from "react";

import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../../utils/types";

import styles from "./ingredient-card.module.css";

function IngredientTypeCard({ ingredient }) {
  return (
    <div className={`${styles.card} pr-4 pl-4`}>
      <Counter count={1} size="default" />
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={`${styles.cost} mt-1 mb-1`}>
        <p className="text_type_digits-default pr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.name}>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
    </div>
  );
}

IngredientTypeCard.propTypes = {
  ingredient: PropTypes.shape(INGREDIENT_TYPE),
};

export default IngredientTypeCard;
