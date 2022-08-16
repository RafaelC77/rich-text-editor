import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type ParagraphElement = {
  type: "paragraph";
  textAlign?: TextAlign;
  children: CustomText[];
};

export type CodeElement = {
  type: "code";
  textAlign?: TextAlign;
  children: CustomText;
};

export type TitleElement = {
  type: "title";
  textAlign?: TextAlign;
  children: CustomText;
};

export type QuoteElement = {
  type: "quote";
  textAlign?: TextAlign;
  children: CustomText;
};

export type ListElement = {
  type: "list";
  textAlign?: TextAlign;
  children: CustomText[];
};

export type ListItemElement = {
  type: "list-item";
  textAlign?: TextAlign;
  children: CustomText;
};

export type TextAlign = "center" | "left" | "right" | "justify";

export type CustomElement =
  | ParagraphElement
  | CodeElement
  | TitleElement
  | QuoteElement
  | ListElement
  | ListItemElement;

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
