import React from "react";

import { Header, BurgerIngredients, BurgerConstructor } from "../index";

import { spaceUrl } from "../../shared/utils/consts";
import { dataService } from "../../shared/services/data.service";

import styles from "./app.module.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    dataService
      .get(`${spaceUrl}/api/ingredients`)
      .then((requestData) => {
        setData(requestData);
      })
      .catch((error) => {
        dataService.onError(error);
      });
  }, []);

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
