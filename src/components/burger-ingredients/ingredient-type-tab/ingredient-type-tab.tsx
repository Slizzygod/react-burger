import React from "react";

import { Link } from "react-scroll";

import PropTypes from "prop-types";
import { INGREDIENT_GROUP_TYPE } from "../../../shared/utils/types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientTypeTab({ types }) {
  const [current, setCurrent] = React.useState("bun");

  return (
    <nav style={{ display: "flex" }}>
      {types &&
        types.map((el) => (
          <Link
            to={el.type}
            spy={true}
            smooth={true}
            duration={500}
            key={el.type}
            onSetActive={setCurrent}
            containerId="scroll-ingredients"
          >
            <Tab
              value={el.type}
              active={current === el.type}
              onClick={setCurrent}
            >
              {el.name}
            </Tab>
          </Link>
        ))}
    </nav>
  );
}

IngredientTypeTab.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape(INGREDIENT_GROUP_TYPE)),
};

export default IngredientTypeTab;
