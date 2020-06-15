import React from "react";
import { useTranslation } from "react-i18next";
import logo from "./Images/centime.png";
import "./App.css";

export const Header = () => {
  const { t, i18n } = useTranslation(["translation", "language"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <div className={"header"}>
      <div className={"content-width"}>
        <img className={"logo"} src={logo} alt="centime logo" />
      </div>

      <div className={"selectLanguage"}>
        <select onChange={(event) => changeLanguage(event.target.value)}>
          <option defaultValue value={"en"}>
            {t("translation:en")}
          </option>
          <option value={"de"}>{t("translation:de")}</option>
        </select>
      </div>
    </div>
  );
};
