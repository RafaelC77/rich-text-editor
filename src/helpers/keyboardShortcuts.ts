import { KeyboardEvent } from "react";
import { Editor } from "slate";
import { CustomEditor } from "./customEditor";

export function handleKeyDown(event: KeyboardEvent, editor: Editor) {
  if (!event.altKey) {
    return;
  }

  switch (event.key) {
    // Formatação em bloco

    case "c": {
      event.preventDefault();
      CustomEditor.toggleCodeBlock(editor);
      break;
    }

    case "t": {
      event.preventDefault();
      CustomEditor.toggleTitleBlock(editor);
      break;
    }

    case "q": {
      event.preventDefault();
      CustomEditor.toggleQuoteBlock(editor);
      break;
    }

    case "z": {
      event.preventDefault();
      CustomEditor.toggleListBlock(editor);
      break;
    }

    // Formatação em linha

    case "b": {
      event.preventDefault();
      CustomEditor.toggleBoldMark(editor);
      break;
    }

    case "i": {
      event.preventDefault();
      CustomEditor.toggleItalicMark(editor);
      break;
    }

    case "u": {
      event.preventDefault();
      CustomEditor.toggleUnderlineMark(editor);
      break;
    }

    // Alinhamento de texto

    case "e": {
      event.preventDefault();
      CustomEditor.setTextAlign(editor, "center");
      break;
    }

    case "l": {
      event.preventDefault();
      CustomEditor.setTextAlign(editor, "left");
      break;
    }

    case "r": {
      event.preventDefault();
      CustomEditor.setTextAlign(editor, "right");
      break;
    }

    case "j": {
      event.preventDefault();
      CustomEditor.setTextAlign(editor, "justify");
      break;
    }
  }
}
