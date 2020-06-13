import React, { useState, useEffect, useRef } from "react";
import { SankeyDiagram } from "./SankeyDiagram";

export const Sankey = (props) => {
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
    props.sankeyRequested();
    measureSVG();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measureSVG);
    return () => {
      window.removeEventListener("resize", measureSVG);
    };
  }, []);

  return (
    <div>
      <svg width="100%" height="600" ref={sankeyRef}>
        {Object.keys(props.sankey).length && (
          <SankeyDiagram data={props.sankey} width={width} height={height} />
        )}
      </svg>
    </div>
  );
};
