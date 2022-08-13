import { HTMLAttributes } from "react";

type DefaultProps = HTMLAttributes<HTMLParagraphElement> & {
  children: any;
};

export function Default({ children, ...atributes }: DefaultProps) {
  return <p {...atributes}>{children}</p>;
}
