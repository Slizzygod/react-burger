import React from "react";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../shared/utils/types";

import withModal from "../hoc/with-modal";

import IngredientTypeTab from "./ingredient-type-tab/ingredient-type-tab";
import IngredientTypeBlock from "./ingredient-type-block/ingredient-type-block";
import IngredientDetails from "./ingredient-details/ingredient-details";

import { dataMapService } from "../../shared/services/data-map.service";

import styles from "./burger-ingredients.module.css";

function BurgerIngredients({ data }) {
  const [selectedIngredient, setSelectedIngredient] = React.useState(null);

  const handleChildUnmount = () => {
    setSelectedIngredient(null);
  };

  const WithModal = withModal({
    data: selectedIngredient,
    unmount: handleChildUnmount,
    displayTitle: true,
  })(IngredientDetails);

  const ingredientsData = dataMapService.getIngredients(data);
  const ingredientTypes = dataMapService.getIngredientTypes(data);

  const onClickIngredient = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  return (
    <section className={`${styles.section} mr-10`}>
      {selectedIngredient && <WithModal />}
      <p className="mt-10 mb-5 text_type_main-large">Соберите бургер</p>

      <IngredientTypeTab types={ingredientTypes} />

      <div className={`${styles.elements} elements mt-10`}>
        {ingredientsData &&
          ingredientsData.map((ingredientData) => (
            <IngredientTypeBlock
              key={ingredientData.type}
              ingredientData={ingredientData}
              onClickIngredient={onClickIngredient}
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
