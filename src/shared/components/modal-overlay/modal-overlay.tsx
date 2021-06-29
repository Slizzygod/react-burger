import React from "react";

import PropTypes from "prop-types";

import styles from "./modal-overlay.module.css";

function ModalOverlay({ reference }) {
  return <div ref={reference} className={styles.modal_overlay}></div>;
}

ModalOverlay.propTypes = {
  reference: PropTypes.shape({ current: PropTypes.any }).isRequired,
};

export default ModalOverlay;
