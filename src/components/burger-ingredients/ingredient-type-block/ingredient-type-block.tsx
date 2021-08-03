import React from "react";

import PropTypes from "prop-types";
import {
  INGREDIENT_GROUP_TYPE,
  INGREDIENT_TYPE,
} from "../../../shared/utils/types";

import IngredientTypeCard from "../ingredient-card/ingredient-card";

import styles from "./ingredient-type-block.module.css";

function IngredientTypeBlock({ ingredientData, onClickIngredient }) {
  return (
    <div id={ingredientData.type}>
      <p className="text text_type_main-medium">{ingredientData.name}</p>
      <div className={`${styles.block} pl-4 pt-6 pr-1 pb-10`}>
        {ingredientData &&
          ingredientData.elements.map((ingredient) => (
            <IngredientTypeCard
              key={ingredient._id}
              ingredient={ingredient}
              onClickIngredient={onClickIngredient}
            />
          ))}
      </div>
    </div>
  );
}

IngredientTypeBlock.propTypes = {
  ingredientData: PropTypes.shape({
    ...INGREDIENT_GROUP_TYPE,
    elements: PropTypes.arrayOf(PropTypes.shape(INGREDIENT_TYPE)),
  }).isRequired,
  onClickIngredient: PropTypes.func.isRequired,
};

export default IngredientTypeBlock;
