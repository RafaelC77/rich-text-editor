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
import { Editor } from "slate";
import { CustomEditor } from "../../helpers/customEditor";

import "./style.css";

interface ToolbarProps {
  editor: Editor;
}

export function Toolbar({ editor }: ToolbarProps) {
  return (
    <div className="toolbar">
      <button
        title="Título (alt+t)"
        onClick={() => CustomEditor.toggleTitleBlock(editor)}
      >
        <TextH size={22} />
        <span>Título</span>
      </button>
      <button
        title="Negrito (alt+b)"
        onClick={() => CustomEditor.toggleBoldMark(editor)}
      >
        <TextBolder size={22} />
        <span>Negrito</span>
      </button>
      <button
        title="Itálico (alt+i)"
        onClick={() => CustomEditor.toggleItalicMark(editor)}
      >
        <TextItalic size={22} />
        <span>Itálico</span>
      </button>
      <button
        title="Sublinhado (alt+u)"
        onClick={() => CustomEditor.toggleUnderlineMark(editor)}
      >
        <TextUnderline size={22} />
        <span>Sublinhado</span>
      </button>
      <button
        title="Citação (alt+q)"
        onClick={() => CustomEditor.toggleQuoteBlock(editor)}
      >
        <Quotes size={22} weight={"fill"} />
        <span>Citação</span>
      </button>
      <button
        title="Código (alt+c)"
        onClick={() => CustomEditor.toggleCodeBlock(editor)}
      >
        <CodeSimple size={22} />
        <span>Código</span>
      </button>
      <button
        title="Lista (alt+z)"
        onClick={() => CustomEditor.toggleListBlock(editor)}
      >
        <ListDashes size={22} />
        <span>Lista</span>
      </button>
      <button
        title="Justificar (alt+j)"
        onClick={() => CustomEditor.setTextAlign(editor, "justify")}
      >
        <TextAlignJustify size={22} />
        <span>Justificar</span>
      </button>
      <button
        title="Centralizar (alt+e)"
        onClick={() => CustomEditor.setTextAlign(editor, "center")}
      >
        <TextAlignCenter size={22} />
        <span>Centralizar</span>
      </button>
      <button
        title="Alinhar à esquerda (alt+l)"
        onClick={() => CustomEditor.setTextAlign(editor, "left")}
      >
        <TextAlignLeft size={22} />
        <span>Alinhar à esquerda</span>
      </button>
      <button
        title="Alinhar à direita (alt+r)"
        onClick={() => CustomEditor.setTextAlign(editor, "right")}
      >
        <TextAlignRight size={22} />
        <span>Alinhar à direita</span>
      </button>
    </div>
  );
}
