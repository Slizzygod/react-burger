import React from "react";

import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../utils/types";

import styles from "./burger-constructor.module.css";

function BurgerConstructor({ data }) {
  return (
    <section className={styles.section}>
      <div className={`${styles.elements} pl-4 mt-25 mb-10`}>
        <div className={`${styles.element_top} pr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>

        <ul className={`${styles.scroll_elements} scroll_elements pr-1`}>
          {data &&
            data.map((ingredient) => (
              <li key={ingredient._id} className={styles.scroll_element}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            ))}
        </ul>

        <div className={`${styles.element_bottom} pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={data[data.length - 1].name}
            price={data[data.length - 1].price}
            thumbnail={data[data.length - 1].image}
          />
        </div>
      </div>

      <div className={`${styles.footer} pr-4`}>
        <div className={`${styles.total_cost} mr-10`}>
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
