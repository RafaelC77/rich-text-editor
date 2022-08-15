import { Editor, Text, Element, Transforms } from "slate";

export const CustomEditor = {
  isBoldMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isItalicMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.italic === true,
      universal: true,
    });

    return !!match;
  },

  isUnderLineMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.underline === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "code",
    });

    return !!match;
  },

  isTitleBlockActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "title",
    });

    return !!match;
  },

  isQuoteBlockActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "quote",
    });

    return !!match;
  },

  toggleBoldMark(editor: Editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleItalicMark(editor: Editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleUnderlineMark(editor: Editor) {
    const isActive = CustomEditor.isUnderLineMarkActive(editor);
    Transforms.setNodes(
      editor,
      { underline: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleCodeBlock(editor: Editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleTitleBlock(editor: Editor) {
    const isActive = CustomEditor.isTitleBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "title" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleQuoteBlock(editor: Editor) {
    const isActive = CustomEditor.isQuoteBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "quote" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};
