import React from "react";

import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import appHeaderStyles from "./app-header.module.css";

function Header() {
  return (
    <header className={`${appHeaderStyles.header} pt-4 pb-4`}>
      <div className={appHeaderStyles.container}>
        <div className={appHeaderStyles.main_buttons}>
          <div className={`${appHeaderStyles.button} mr-2 pl-5 pt-4 pr-5 pb-4`}>
            <BurgerIcon type="primary" />
            <p className="ml-2 text_type_main-default">Конструктор</p>
          </div>

          <div className={`${appHeaderStyles.button} pl-5 pt-4 pr-5 pb-4`}>
            <ListIcon type="secondary" />
            <p className="ml-2 text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </div>
        </div>

        <div className={appHeaderStyles.logo}>
          <Logo />
        </div>

        <div className={`${appHeaderStyles.button} pl-5 pt-4 pr-5 pb-4`}>
          <ProfileIcon type="secondary" />
          <p className="ml-2 text_type_main-default text_color_inactive">
            Личный кабинет
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
