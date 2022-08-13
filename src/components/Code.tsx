import { RenderElementProps } from "slate-react";

export function Code(props: RenderElementProps) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}
