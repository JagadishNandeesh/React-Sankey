import React from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation(["translation", "welcome"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <button type="button" onClick={() => changeLanguage("de")}>
        {t("translation:de")}
      </button>

      <button type="button" onClick={() => changeLanguage("en")}>
        {t("translation:en")}
      </button>

      <h1>{t("welcome:title", "Hello there.")}</h1>

      <p>{t("welcome:content.text", "Welcome here.")}</p>
    </div>
  );
};

export default App;
