import React from "react";

import PropTypes from "prop-types";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerConstructorElementStyles from "./burger-constructor.module.css";

function BurgerConstructorElement({
  type,
  isLocked,
  text,
  price,
  thumbnail,
}: any) {
  return (
    <div
      className={
        isLocked
          ? burgerConstructorElementStyles.element_locked
          : burgerConstructorElementStyles.element_unlocked
      }
    >
      {!isLocked && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </div>
  );
}

BurgerConstructorElement.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default BurgerConstructorElement;
