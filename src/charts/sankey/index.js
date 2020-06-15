import React, { useState, useEffect, useRef } from "react";
import { SankeyDiagram } from "./SankeyDiagram";
import "./Sankey.css";
import { useTranslation } from "react-i18next";
import { SankeyList } from "./SankeyList";

export const Sankey = ({ sankey, sankeyRequested }) => {
  const [data, setData] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const sankeyRef = useRef(null);

  const { t, i18n } = useTranslation(["translation", "language"]);

  const measureSVG = () => {
    const { width, height } = sankeyRef.current.getBoundingClientRect();
    setWidth(width);
    setHeight(height);
  };
  useEffect(() => {
    sankeyRequested();
    measureSVG();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measureSVG);
    return () => {
      window.removeEventListener("resize", measureSVG);
    };
  }, []);

  return (
    <div className={"sankeywrapper content-width "}>
      <h1 className={"sankeyheader"}>
        {t(`language:IndiaBuget`, "India Budget 2020")}
      </h1>

      <div className={"contianer"}>
        <SankeyList sankey={sankey} />
        <div className={"sankeySvg"}>
          <svg width="100%" height="600" ref={sankeyRef}>
            {Object.keys(sankey).length && (
              <SankeyDiagram data={sankey} width={width} height={height} />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};
