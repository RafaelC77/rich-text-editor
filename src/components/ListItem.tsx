import { RenderElementProps } from "slate-react";

export function ListItem(props: RenderElementProps) {
  return <li {...props.attributes}>{props.children}</li>;
}
