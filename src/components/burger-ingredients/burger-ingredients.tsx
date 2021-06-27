import React from "react";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../utils/types";

import IngredientTypeTab from "./ingredient-type-tab/ingredient-type-tab";
import IngredientTypeBlock from "./ingredient-type-block/ingredient-type-block";

import { dataMapService } from "../../utils/data.map.service";

import styles from "./burger-ingredients.module.css";

function BurgerIngredients({ data }) {
  const ingredientsData = dataMapService.getIngredients(data);
  const ingredientTypes = dataMapService.getIngredientTypes(data);

  return (
    <section className={`${styles.section} mr-10`}>
      <p className="mt-10 mb-5 text_type_main-large">Соберите бургер</p>

      <IngredientTypeTab types={ingredientTypes} />

      <div className={`${styles.elements} elements mt-10`}>
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
