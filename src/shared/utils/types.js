import PropTypes from "prop-types";

const INGREDIENT_GROUP_TYPE = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const INGREDIENT_TYPE = {
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export { INGREDIENT_GROUP_TYPE, INGREDIENT_TYPE };
