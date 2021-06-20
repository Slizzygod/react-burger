import React from "react";

import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../../../utils/types";

import ingredientCardStyles from "./ingredient-card.module.css";

function IngredientTypeCard({ ingredient }: any) {
  return (
    <div className={`${ingredientCardStyles.card} pr-4 pl-4`}>
      <Counter count={1} size="default" />
      <img src={ingredient.image} alt="Burger ingredient" />
      <div className={`${ingredientCardStyles.cost} mt-1 mb-1`}>
        <p className="text_type_digits-default pr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={ingredientCardStyles.name}>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
    </div>
  );
}

IngredientTypeCard.propTypes = {
  ingredient: PropTypes.shape(INGREDIENT_TYPE),
};

export default IngredientTypeCard;
