import React, { useState } from "react";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";
import chroma from "chroma-js";
import { Tooltip } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const SankeyNode = ({ name, x0, x1, y0, y1, color }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation(["translation", "language"]);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={<div>{t(`language:${name}`, name)}</div>}
    >
      <rect
        onMouseOver={() => handleOpen()}
        onMouseOut={() => handleClose()}
        x={x0}
        y={y0}
        width={x1 - x0}
        height={y1 - y0}
        fill={color}
      >
        <title>{name}</title>
      </rect>
    </Tooltip>
  );
};

const SankeyLink = ({ link, color }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { t, i18n } = useTranslation(["translation", "language"]);

  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={
        <div>
          {t(`language:${link.source.name}`, link.source.name)}-{" "}
          {t(`language:${link.target.name}`, link.target.name)}-{link.value}
        </div>
      }
    >
      <path
        d={sankeyLinkHorizontal()(link)}
        onMouseOver={() => handleOpen()}
        onMouseOut={() => handleClose()}
        style={{
          fill: "none",
          strokeOpacity: ".3",
          stroke: color,
          strokeWidth: Math.max(1, link.width),
        }}
      />
    </Tooltip>
  );
};

export const SankeyDiagram = ({ data, width, height }) => {
  const { nodes, links } = sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .extent([
      [1, 1],
      [width - 1, height - 5],
    ])(data);
  const color = chroma.scale("Set3").classes(nodes.length);
  const colorScale = d3.scaleLinear().domain([0, nodes.length]).range([0, 1]);
  return (
    <g style={{ mixBlendMode: "multiply" }}>
      {nodes.map((node, i) => (
        <SankeyNode
          {...node}
          color={color(colorScale(i)).hex()}
          key={node.name}
        />
      ))}
      {links.map((link, i) => (
        <SankeyLink
          link={link}
          color={color(colorScale(link.source.index)).hex()}
          key={i}
        />
      ))}
    </g>
  );
};

export default SankeyDiagram;
