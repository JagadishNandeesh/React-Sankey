import React from "react";
import { useTranslation } from "react-i18next";
import { SankeyContainer } from "./charts/sankey/Container";
import logo from "./Images/centime.png";
import "./App.css";
import { Header } from "./Header";

const App = () => {
  const { t, i18n } = useTranslation(["translation", "language"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <Header />
      <SankeyContainer />
    </div>
  );
};

export default App;
