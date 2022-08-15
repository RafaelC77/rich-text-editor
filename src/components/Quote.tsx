import { RenderElementProps } from "slate-react";

export function Quote(props: RenderElementProps) {
  return (
    <blockquote {...props.attributes}>
      <p>{props.children}</p>
    </blockquote>
  );
}
