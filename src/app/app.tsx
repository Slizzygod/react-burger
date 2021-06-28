import React from "react";

import {
  Header,
  BurgerIngredients,
  BurgerConstructor,
} from "../components/index";

import { data } from "../utils/data";

import appStyles from "./app.module.css";

function App() {
  return (
    <main className={appStyles.main_hero}>
      <Header />
      <div className={appStyles.content}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>
    </main>
  );
}

export default App;
