import { Quotes } from "phosphor-react";
import { RenderElementProps } from "slate-react";

export function Quote(props: RenderElementProps) {
  return (
    <blockquote {...props.attributes}>
      <Quotes weight="fill" size={28} />
      <p style={{ textAlign: props.element.textAlign }}>{props.children}</p>
    </blockquote>
  );
}
