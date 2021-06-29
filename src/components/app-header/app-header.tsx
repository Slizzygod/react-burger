import React from "react";

import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./app-header.module.css";

function Header() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.navigation}>
        <div className={styles.main_buttons}>
          <div className={`${styles.button} mr-2 pl-5 pt-4 pr-5 pb-4`}>
            <BurgerIcon type="primary" />
            <p className="ml-2 text_type_main-default">Конструктор</p>
          </div>

          <div className={`${styles.button} pl-5 pt-4 pr-5 pb-4`}>
            <ListIcon type="secondary" />
            <p className="ml-2 text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </div>
        </div>

        <div className={styles.logo}>
          <a href="/">
            <Logo />
          </a>
        </div>

        <div className={`${styles.button} pl-5 pt-4 pr-5 pb-4`}>
          <ProfileIcon type="secondary" />
          <p className="ml-2 text_type_main-default text_color_inactive">
            Личный кабинет
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
