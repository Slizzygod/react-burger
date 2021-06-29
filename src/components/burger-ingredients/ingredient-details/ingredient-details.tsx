import React from "react";

import PropTypes from "prop-types";

import { INGREDIENT_TYPE } from "../../../shared/utils/types";

import IngredientWorth from "./ingredient-worth/ingredient-worth";

import styles from "./ingredient-details.module.css";

function IngredientDetails({ data }) {
  return (
    <div className={styles.info}>
      <img className={styles.image} src={data.image_large} alt={data.name} />
      <p className="mt-4 mb-8 text_type_main-medium">{data.name}</p>
      <div className={styles.worth}>
        <IngredientWorth name="Калории, ккал" value={data.calories} />
        <IngredientWorth name="Белки, г" value={data.proteins} />
        <IngredientWorth name="Жиры, г" value={data.fat} />
        <IngredientWorth name="Углеводы, г" value={data.calories} />
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  data: PropTypes.shape(INGREDIENT_TYPE),
};

export default IngredientDetails;
