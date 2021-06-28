import React from "react";

import PropTypes from "prop-types";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./modal.module.css";

function Modal({ children, reference, displayTitle }) {
  return (
    <div className={`${styles.modal} pt-10 pr-10 pb-15 pl-10`}>
      <div className={styles.info}>
        <p
          className={`${
            displayTitle ? styles.block : styles.none
          } text text_type_main-large`}
        >
          Детали ингредиента
        </p>
        <span ref={reference} className={styles.close}>
          <CloseIcon type="primary" />
        </span>
      </div>
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  reference: PropTypes.shape({ current: PropTypes.any }).isRequired,
  displayTitle: PropTypes.bool.isRequired,
};

export default Modal;
