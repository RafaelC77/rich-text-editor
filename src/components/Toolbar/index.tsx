import {
  CodeSimple,
  ListDashes,
  Quotes,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextBolder,
  TextH,
  TextItalic,
  TextUnderline,
} from "phosphor-react";
import { useSlate } from "slate-react";
import { CustomEditor } from "../../helpers/customEditor";

import "./style.css";

export function Toolbar() {
  const editor = useSlate();

  return (
    <div className="toolbar">
      <button
        title="Título (alt+t)"
        onClick={() => CustomEditor.toggleTitleBlock(editor)}
        className={CustomEditor.isTitleBlockActive(editor) ? "active" : ""}
      >
        <TextH size={22} />
        <span>Título</span>
      </button>
      <button
        title="Negrito (alt+b)"
        onClick={() => CustomEditor.toggleBoldMark(editor)}
        className={CustomEditor.isBoldMarkActive(editor) ? "active" : ""}
      >
        <TextBolder size={22} />
        <span>Negrito</span>
      </button>
      <button
        title="Itálico (alt+i)"
        onClick={() => CustomEditor.toggleItalicMark(editor)}
        className={CustomEditor.isItalicMarkActive(editor) ? "active" : ""}
      >
        <TextItalic size={22} />
        <span>Itálico</span>
      </button>
      <button
        title="Sublinhado (alt+u)"
        onClick={() => CustomEditor.toggleUnderlineMark(editor)}
        className={CustomEditor.isUnderLineMarkActive(editor) ? "active" : ""}
      >
        <TextUnderline size={22} />
        <span>Sublinhado</span>
      </button>
      <button
        title="Citação (alt+q)"
        onClick={() => CustomEditor.toggleQuoteBlock(editor)}
        className={CustomEditor.isQuoteBlockActive(editor) ? "active" : ""}
      >
        <Quotes size={22} weight={"fill"} />
        <span>Citação</span>
      </button>
      <button
        title="Código (alt+c)"
        onClick={() => CustomEditor.toggleCodeBlock(editor)}
        className={CustomEditor.isCodeBlockActive(editor) ? "active" : ""}
      >
        <CodeSimple size={22} />
        <span>Código</span>
      </button>
      <button
        title="Lista (alt+z)"
        onClick={() => CustomEditor.toggleListBlock(editor)}
        className={CustomEditor.isListBlockActive(editor) ? "active" : ""}
      >
        <ListDashes size={22} />
        <span>Lista</span>
      </button>
      <button
        title="Justificar (alt+j)"
        onClick={() => CustomEditor.setTextAlign(editor, "justify")}
        className={
          CustomEditor.isTextAlignActive(editor, "justify") ? "active" : ""
        }
      >
        <TextAlignJustify size={22} />
        <span>Justificar</span>
      </button>
      <button
        title="Centralizar (alt+e)"
        onClick={() => CustomEditor.setTextAlign(editor, "center")}
        className={
          CustomEditor.isTextAlignActive(editor, "center") ? "active" : ""
        }
      >
        <TextAlignCenter size={22} />
        <span>Centralizar</span>
      </button>
      <button
        title="Alinhar à esquerda (alt+l)"
        onClick={() => CustomEditor.setTextAlign(editor, "left")}
        className={
          CustomEditor.isTextAlignActive(editor, "left") ? "active" : ""
        }
      >
        <TextAlignLeft size={22} />
        <span>Alinhar à esquerda</span>
      </button>
      <button
        title="Alinhar à direita (alt+r)"
        onClick={() => CustomEditor.setTextAlign(editor, "right")}
        className={
          CustomEditor.isTextAlignActive(editor, "right") ? "active" : ""
        }
      >
        <TextAlignRight size={22} />
        <span>Alinhar à direita</span>
      </button>
    </div>
  );
}
