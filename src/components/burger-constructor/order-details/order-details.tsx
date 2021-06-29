import React from "react";

import PropTypes from "prop-types";

import orderStatusSvg from "../../../assets/images/order_status.svg";

import styles from "./order-details.module.css";

function OrderDetails({ data }) {
  return (
    <div className={`${styles.info} pb-15`}>
      <p className="text_type_digits-large mb-8">{data}</p>
      <p className="text_type_main-medium mb-15">Идентификатор заказа</p>
      <img className="mb-15" src={orderStatusSvg} alt="Статус заказа" />
      <p className="text_type_main-small mb-2">Ваш заказ начали готовить</p>
      <p className="text_type_main-default text_color_inactive mb-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  data: PropTypes.string.isRequired,
};

export default OrderDetails;
