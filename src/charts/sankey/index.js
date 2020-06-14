import React, { useState, useEffect, useRef } from "react";
import { SankeyDiagram } from "./SankeyDiagram";
import "./Sankey.css";

export const Sankey = ({ sankey, sankeyRequested }) => {
  const [data, setData] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const sankeyRef = useRef(null);

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
    <div className={"sankeywrapper"}>
      <h1 className={"sankeyheader"}>India budget 2020</h1>
      <svg width="100%" height="600" ref={sankeyRef}>
        {Object.keys(sankey).length && (
          <SankeyDiagram data={sankey} width={width} height={height} />
        )}
      </svg>
    </div>
  );
};
