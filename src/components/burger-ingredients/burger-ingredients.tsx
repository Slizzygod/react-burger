import React from "react";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../utils/types";

import IngredientTypeTab from "./components/ingredient-type-tab/ingredient-type-tab";
import IngredientTypeBlock from "./components/ingredient-type-block/ingredient-type-block";

import {
  onMapIngredients,
  onMapIngredientTypes,
} from "./burger-ingredients.service";

import { SECTION_HEIGHT } from "../../utils/consts";
import {
  HEADIN_MARGIN_TOP,
  HEADIN_MARGIN_BOTTOM,
  TAB_HEIGHT,
  TAB_MARGIN_BOTTOM,
  TYPE_BLOCK_PADDING_BOTTOM,
} from "./burger-ingredients.consts";

import burgerIngredientsStyles from "./burger-ingredients.module.css";

function BurgerIngredients({ data }: any) {
  const ingredientsData = onMapIngredients(data);
  const ingredientTypes = onMapIngredientTypes(data);

  const heightBlockCards =
    SECTION_HEIGHT -
    HEADIN_MARGIN_TOP -
    HEADIN_MARGIN_BOTTOM -
    TAB_HEIGHT -
    TAB_MARGIN_BOTTOM -
    TYPE_BLOCK_PADDING_BOTTOM;

  return (
    <section
      className={`${burgerIngredientsStyles.section} mr-10`}
      style={{ height: SECTION_HEIGHT }}
    >
      <p className="mt-10 mb-5 text_type_main-large">Соберите бургер</p>

      <IngredientTypeTab types={ingredientTypes} />

      <div
        className={`${burgerIngredientsStyles.elements} mt-10`}
        style={{ height: heightBlockCards }}
      >
        {ingredientsData &&
          ingredientsData.map((ingredientData) => (
            <IngredientTypeBlock
              key={ingredientData.type}
              ingredientData={ingredientData}
            />
          ))}
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(INGREDIENT_TYPE)),
};

export default BurgerIngredients;
