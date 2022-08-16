import { RenderElementProps } from "slate-react";

export function Title(props: RenderElementProps) {
  return (
    <h1 {...props.attributes} style={{ textAlign: props.element.textAlign }}>
      {props.children}
    </h1>
  );
}
