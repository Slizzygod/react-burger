import React from "react";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../utils/types";

import BurgerConstructorElement from "./components/burger-constructor-element";

import { SECTION_HEIGHT } from "../../utils/consts";
import {
  ELEMENTS_MARGIN_TOP,
  ELEMENT_HEIGHT,
  ELEMENT_MARGIN_BOTTOM,
  ELEMENTS_MARGIN_BOTTOM,
} from "./burger-constructor.consts";

import burgerConstructorStyles from "./burger-constructor.module.css";

function BurgerConstructor({ data }: any) {
  const heightScrollElements =
    SECTION_HEIGHT -
    ELEMENTS_MARGIN_TOP -
    ELEMENT_HEIGHT -
    ELEMENT_MARGIN_BOTTOM -
    ELEMENT_HEIGHT -
    ELEMENT_MARGIN_BOTTOM -
    ELEMENT_HEIGHT -
    ELEMENT_MARGIN_BOTTOM -
    ELEMENTS_MARGIN_BOTTOM;

  return (
    <section
      className={burgerConstructorStyles.section}
      style={{ height: SECTION_HEIGHT }}
    >
      <div className={`${burgerConstructorStyles.elements} pl-4 mt-25 mb-10`}>
        <div className="pr-4">
          <BurgerConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>

        <div
          className={burgerConstructorStyles.scroll_elements}
          style={{ height: heightScrollElements }}
        >
          {data &&
            data.map((ingredient: any) => (
              <BurgerConstructorElement
                key={ingredient._id}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            ))}
        </div>

        <div className="pr-4">
          <BurgerConstructorElement
            type="bottom"
            isLocked={true}
            text={data[data.length - 1].name}
            price={data[data.length - 1].price}
            thumbnail={data[data.length - 1].image}
          />
        </div>
      </div>

      <div className={`${burgerConstructorStyles.footer} pr-4`}>
        <div className={`${burgerConstructorStyles.total_cost} mr-10`}>
          <p className="text_type_digits-medium pr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(INGREDIENT_TYPE)),
};

export default BurgerConstructor;
