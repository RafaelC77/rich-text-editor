import { RenderElementProps } from "slate-react";

export function Default(props: RenderElementProps) {
  return <p {...props.attributes}>{props.children}</p>;
}
