import { Html } from "next/document";
import React from "react";

/**
 * Architecture container located at the root of the DOM.
   Generates a columnar flex container with a centered item that defines the width of the content.
   Allows strips in full width or with a defined width.
 * 
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
    flexDirection: "column",
  };

  const Tag = `${tag}`;
  console.log({ tag });

  return (
    <Tag
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
    </Tag>
  );
}
