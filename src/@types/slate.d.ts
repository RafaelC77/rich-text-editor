import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type ParagraphElement = { type: "paragraph"; children: CustomText[] };

export type CodeElement = { type: "code"; children: CustomText };

export type TitleElement = { type: "title"; children: CustomText };

export type QuoteElement = { type: "quote"; children: CustomText };

export type CustomElement =
  | ParagraphElement
  | CodeElement
  | TitleElement
  | QuoteElement;

export type CustomText = {
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
