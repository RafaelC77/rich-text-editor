import { RenderElementProps } from "slate-react";

export function Title(props: RenderElementProps) {
  return <h1 {...props.attributes}>{props.children}</h1>;
}
