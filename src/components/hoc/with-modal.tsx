import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import { INGREDIENT_TYPE } from "../../shared/utils/types";

import { Modal, ModalOverlay } from "../../shared/components";

const modalRoot = document.getElementById("react-modals");

const withModal =
  ({ data, unmount, displayTitle }) =>
  (WrapperComponent) => {
    return () => {
      const closeModalRef = React.useRef<HTMLElement>(null);
      const overlayRef = React.useRef<HTMLElement>(null);

      const onClickCloseModal = () => {
        unmount();
      };

      const onKeyDownCloseModal = (e) => {
        if (e.keyCode === 27) {
          unmount();
        }
      };

      React.useEffect(() => {
        const modal = closeModalRef.current;
        const overlay = overlayRef.current;

        modal?.addEventListener("click", onClickCloseModal);
        overlay?.addEventListener("click", onClickCloseModal);
        document.addEventListener("keydown", onKeyDownCloseModal);

        return () => {
          modal?.removeEventListener("click", onClickCloseModal);
          overlay?.removeEventListener("click", onClickCloseModal);
          document.removeEventListener("keydown", onKeyDownCloseModal);
        };
      }, []);

      return modalRoot
        ? ReactDOM.createPortal(
            <>
              <Modal reference={closeModalRef} displayTitle={displayTitle}>
                <WrapperComponent data={data} />
              </Modal>
              <ModalOverlay reference={overlayRef} />
            </>,
            modalRoot
          )
        : null;
    };
  };

withModal.propTypes = {
  WrapperComponent: PropTypes.element,
  data: PropTypes.oneOfType([
    PropTypes.shape(INGREDIENT_TYPE),
    PropTypes.string,
  ]).isRequired,
  unmount: PropTypes.func.isRequired,
  displayTitle: PropTypes.bool.isRequired,
};

export default withModal;
