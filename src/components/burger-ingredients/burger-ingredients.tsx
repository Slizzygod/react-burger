import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { SET_SELECTED_INGREDIENT } from "../../store/actions/burger";

import withModal from "../hoc/with-modal";

import IngredientTypeTab from "./ingredient-type-tab/ingredient-type-tab";
import IngredientTypeBlock from "./ingredient-type-block/ingredient-type-block";
import IngredientDetails from "./ingredient-details/ingredient-details";

import { dataMapService } from "../../shared/services/data-map.service";

import styles from "./burger-ingredients.module.css";

function BurgerIngredients() {
  const dispatch = useDispatch();

  const data = useSelector((store: any) => store.burger.ingredients);
  const selectedIngredient = useSelector(
    (store: any) => store.burger.selectedIngredient
  );

  const handleChildUnmount = () => {
    dispatch({ type: SET_SELECTED_INGREDIENT, payload: null });
  };

  const IngredientInfoModal = withModal({
    data: selectedIngredient,
    unmount: handleChildUnmount,
    displayTitle: true,
  })(IngredientDetails);

  const ingredientsData = dataMapService.getIngredients(data);
  const ingredientTypes = dataMapService.getIngredientTypes(data);

  const onClickIngredient = (ingredient) => {
    dispatch({ type: SET_SELECTED_INGREDIENT, payload: ingredient });
  };

  return (
    <section className={`${styles.section} mr-10`}>
      {selectedIngredient && <IngredientInfoModal />}
      <p className="mt-10 mb-5 text_type_main-large">Соберите бургер</p>

      <IngredientTypeTab types={ingredientTypes} />

      <div
        className={`${styles.elements} elements mt-10`}
        id="scroll-ingredients"
      >
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

export default BurgerIngredients;
