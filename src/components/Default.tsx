import { RenderElementProps } from "slate-react";

export function Default(props: RenderElementProps) {
  return (
    <p {...props.attributes} style={{ textAlign: props.element.textAlign }}>
      {props.children}
    </p>
  );
}
