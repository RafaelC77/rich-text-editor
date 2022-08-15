import { RenderLeafProps } from "slate-react";

export function Leaf(props: RenderLeafProps) {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal",
        textDecorationLine: props.leaf.underline ? "underline" : "none",
      }}
    >
      {props.children}
    </span>
  );
}
