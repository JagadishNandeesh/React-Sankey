import React from "react";
import { useTranslation } from "react-i18next";
import { SankeyContainer } from "./charts/sankey/Container";
import logo from "./Images/centime.png";
import "./App.css";

const App = (props) => {
  const { t, i18n } = useTranslation(["translation", "language"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <div className={"header"}>
        <div>
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

      <SankeyContainer />
    </div>
  );
};

export default App;
