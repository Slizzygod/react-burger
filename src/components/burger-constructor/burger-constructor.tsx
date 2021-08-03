import React from "react";

import { useDrop } from "react-dnd";

import { useSelector, useDispatch } from "react-redux";
import {
  ADD_BUN,
  ADD_INGREDIENT,
  CHANGE_AMOUNT_BUN,
  INCREASE_AMOUNT_INGREDIENT,
  setOrder,
  SET_ORDER_SUCCESS,
} from "../../store/actions/burger";

import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import withModal from "../hoc/with-modal";

import OrderDetails from "./order-details/order-details";
import ScrollElement from "./scroll-element/scroll-element";

import styles from "./burger-constructor.module.css";

function BurgerConstructor() {
  const dispatch = useDispatch();

  const data = useSelector((store: any) => store.burger.constructorIngredients);
  const ingredients = useSelector((store: any) => store.burger.ingredients);
  const order = useSelector((store: any) => store.burger.order);

  const needlyBun = React.useMemo(
    () => ingredients.find((ingredient) => ingredient._id === data.bun),
    [ingredients, data.bun]
  );

  const needlyIngredients = React.useMemo(
    () =>
      data.ingredients.map((ingredient) =>
        ingredients.find((el) => el._id === ingredient)
      ),
    [ingredients, data.ingredients]
  );

  const handleChildUnmount = () => {
    dispatch({ type: SET_ORDER_SUCCESS, payload: null });
  };

  const OrderDetailsModal = withModal({
    data: order,
    unmount: handleChildUnmount,
    displayTitle: false,
  })(OrderDetails);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      onDropHandler(itemId);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  });

  const onDropHandler = (data) => {
    const ingredient = ingredients.find(
      (ingredient) => ingredient._id === data._id
    );

    if (ingredient) {
      if (ingredient.type === "bun") {
        dispatch({ type: ADD_BUN, payload: ingredient._id });
        dispatch({ type: CHANGE_AMOUNT_BUN, payload: ingredient._id });
      } else {
        dispatch({ type: ADD_INGREDIENT, payload: ingredient._id });
        dispatch({ type: INCREASE_AMOUNT_INGREDIENT, payload: ingredient._id });
      }
    }
  };

  const onClickCreateOrder = () => {
    dispatch(setOrder([data.bun, ...data.ingredients, data.bun]));
  };

  const totalPrice = [...needlyIngredients, needlyBun, needlyBun].reduce(
    (el, acc) => {
      return el + (acc ? acc : { price: 0 }).price;
    },
    0
  );

  return (
    <section className={styles.section} ref={dropTarget}>
      {order && <OrderDetailsModal />}
      <div className={`${styles.elements} pl-4 mt-25 mb-10`}>
        <div
          className={
            needlyIngredients && needlyIngredients.length > 4 ? "pr-4" : "pr-1"
          }
        >
          {needlyBun && (
            <li className={styles.element_bottom}>
              <div className="p-4"></div>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${needlyBun.name} (верх)`}
                price={needlyBun.price}
                thumbnail={needlyBun.image}
              />
            </li>
          )}
        </div>

        <ul className={`${styles.scroll_elements} scroll_elements pr-1`}>
          {needlyIngredients &&
            needlyIngredients.length > 0 &&
            needlyIngredients.map((ingredient, index) => (
              <ScrollElement
                ingredient={ingredient}
                index={index}
                key={index}
              />
            ))}
        </ul>

        <div
          className={
            needlyIngredients && needlyIngredients.length > 4 ? "pr-4" : "pr-1"
          }
        >
          {needlyBun && (
            <li className={styles.element_bottom}>
              <div className="p-4"></div>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${needlyBun.name} (низ)`}
                price={needlyBun.price}
                thumbnail={needlyBun.image}
              />
            </li>
          )}
        </div>
      </div>

      {needlyIngredients && needlyIngredients.length > 0 && needlyBun && (
        <div className={`${styles.footer} pr-4`}>
          <div className={`${styles.total_cost} mr-10`}>
            <p className="text_type_digits-medium pr-2">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button onClick={onClickCreateOrder} type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      )}
    </section>
  );
}

export default BurgerConstructor;
