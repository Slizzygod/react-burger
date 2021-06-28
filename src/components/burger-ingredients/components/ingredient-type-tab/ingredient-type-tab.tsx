import React from "react";

import PropTypes from "prop-types";
import { INGREDIENT_GROUP_TYPE } from "../../../../utils/types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientTypeTab({ types }: any) {
  const [current, setCurrent] = React.useState("bun");

  return (
    <div style={{ display: "flex" }}>
      {types &&
        types.map((el: any) => (
          <Tab
            key={el.type}
            value={el.type}
            active={current === el.type}
            onClick={setCurrent}
          >
            {el.name}
          </Tab>
        ))}
    </div>
  );
}

IngredientTypeTab.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape(INGREDIENT_GROUP_TYPE)),
};

export default IngredientTypeTab;
