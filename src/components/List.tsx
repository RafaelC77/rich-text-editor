import { RenderElementProps } from "slate-react";

export function List(props: RenderElementProps) {
  return <ul {...props.attributes}>{props.children}</ul>;
}
