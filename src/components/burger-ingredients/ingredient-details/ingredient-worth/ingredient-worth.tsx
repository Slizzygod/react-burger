import React from "react";

import PropTypes from "prop-types";

import styles from "./ingredient-worth.module.css";

function IngredientWorth({ name, value }) {
  return (
    <div>
      <p className="text text_type_main-default text_color_inactive">{name}</p>
      <p className={`${styles.value_worth} text text_type_digits-default`}>
        {value}
      </p>
    </div>
  );
}

IngredientWorth.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default IngredientWorth;
