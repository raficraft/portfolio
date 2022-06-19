import { Html } from "next/document";
import React from "react";

/**
 *
 * @param {*} tag HTML element default value section *
 * @param {*} params Html Attributes id class name type... *
 * @param {*} css css properties for the top element
 * @param {*} css css properties for the top element
 * @returns JSXELement
 */

export default function ResponsiveParent({
  children,
  tag = "section",
  params = {},
  css = {},
  wrapperCss = {},
}) {
  console.log(arguments);

  const stylesInLine = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <tag
      {...params}
      style={{
        ...stylesInLine,
        ...css,
      }}
    >
      <div
        id={`${params.id}_inside`}
        className={`${params.className}_inside`}
        style={{
          ...stylesInLine,
          ...wrapperCss,
          width: "100%",
        }}
      >
        {children}
      </div>
    </tag>
  );
}
