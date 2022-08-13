import { HTMLAttributes } from "react";
import { CustomText } from "../@types/slate";

type CodeProps = HTMLAttributes<HTMLPreElement> & {
  children: CustomText;
};

export function Code({ children, ...atributes }: CodeProps) {
  return (
    <pre {...atributes}>
      <code>{children}</code>
    </pre>
  );
}
