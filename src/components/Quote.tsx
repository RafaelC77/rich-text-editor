import { Quotes } from "phosphor-react";
import { RenderElementProps } from "slate-react";

export function Quote(props: RenderElementProps) {
  return (
    <blockquote {...props.attributes}>
      <Quotes weight="fill" size={28} />
      <p>{props.children}</p>
    </blockquote>
  );
}
