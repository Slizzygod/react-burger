import React from "react";

import PropTypes from "prop-types";
import {
  INGREDIENT_GROUP_TYPE,
  INGREDIENT_TYPE,
} from "../../../../utils/types";

import IngredientTypeCard from "../ingredient-card/ingredient-card";

import ingredientTypeBlockStyles from "./ingredient-type-block.module.css";

function IngredientTypeBlock({ ingredientData }: any) {
  return (
    <div>
      <p className="text text_type_main-medium">{ingredientData.name}</p>
      <div
        className={`${ingredientTypeBlockStyles.block} pl-4 pt-6 pr-1 pb-10`}
      >
        {ingredientData &&
          ingredientData.elements.map((ingredient: any) => (
            <IngredientTypeCard key={ingredient._id} ingredient={ingredient} />
          ))}
      </div>
    </div>
  );
}

IngredientTypeBlock.propTypes = {
  ingredientData: PropTypes.shape({
    ...INGREDIENT_GROUP_TYPE,
    elements: PropTypes.arrayOf(PropTypes.shape(INGREDIENT_TYPE)),
  }),
};

export default IngredientTypeBlock;
