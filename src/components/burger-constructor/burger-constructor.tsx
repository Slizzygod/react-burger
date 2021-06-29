import React from "react";

import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import withModal from "../hoc/with-modal";

import OrderDetails from "./order-details/order-details";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../shared/utils/types";

import styles from "./burger-constructor.module.css";

function BurgerConstructor({ data }) {
  const [idOrder, setIdOrder] = React.useState<any | null>(null);

  const handleChildUnmount = () => {
    setIdOrder(null);
  };

  const WithModal = withModal({
    data: idOrder,
    unmount: handleChildUnmount,
    displayTitle: false,
  })(OrderDetails);

  const onClickCreateOrder = () => {
    setIdOrder("034536");
  };

  return (
    <section className={styles.section}>
      {idOrder && <WithModal />}
      <div className={`${styles.elements} pl-4 mt-25 mb-10`}>
        <div className={`${styles.element_top} pr-4`}>
          {data && data.length > 0 && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={data[0].name}
              price={data[0].price}
              thumbnail={data[0].image}
            />
          )}
        </div>

        <ul className={`${styles.scroll_elements} scroll_elements pr-1`}>
          {data &&
            data.length > 0 &&
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
          {data && data.length > 0 && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={data[data.length - 1].name}
              price={data[data.length - 1].price}
              thumbnail={data[data.length - 1].image}
            />
          )}
        </div>
      </div>

      <div className={`${styles.footer} pr-4`}>
        <div className={`${styles.total_cost} mr-10`}>
          <p className="text_type_digits-medium pr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={onClickCreateOrder} type="primary" size="large">
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
