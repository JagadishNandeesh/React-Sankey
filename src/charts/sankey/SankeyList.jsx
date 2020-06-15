import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const SankeyList = ({ sankey }) => {
  const { t, i18n } = useTranslation(["translation", "language"]);

  return (
    <div className={"sankeylist"}>
      {sankey &&
        Object.keys(sankey).length &&
        sankey.links.map((link) => (
          <div>
            <span>
              {t(
                `language:${sankey.nodes[link.source].name}`,
                sankey.nodes[link.source].name
              )}{" "}
              -{" "}
              {t(
                `language:${sankey.nodes[link.target].name}`,
                sankey.nodes[link.target].name
              )}{" "}
              - {link.value}
            </span>
          </div>
        ))}
    </div>
  );
};
