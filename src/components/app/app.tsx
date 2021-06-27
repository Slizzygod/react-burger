import React from "react";

import { Header, BurgerIngredients, BurgerConstructor } from "../index";

import { data } from "../../utils/data";

import styles from "./app.module.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.content}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </div>
      </main>
    </>
  );
}

export default App;
