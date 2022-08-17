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
import { KeyboardEvent, useCallback, useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";
import { Code } from "./components/Code";
import { Default } from "./components/Default";
import { Header } from "./components/Header";
import { Leaf } from "./components/Leaf";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import { Quote } from "./components/Quote";
import { Title } from "./components/Title";
import { CustomEditor } from "./helpers/customEditor";

import "./index.css";

export function App() {
  const [theme, setTheme] = useState("light");
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue: Descendant[] = useMemo(() => {
    const content = localStorage.getItem("@TextEditor:content");

    if (content) {
      return JSON.parse(content);
    } else {
      return [
        {
          type: "paragraph",
          children: [{ text: "Digite seu texto aqui..." }],
        },
      ];
    }
  }, []);

  function handleKeyDown(event: KeyboardEvent) {
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

  function saveContent(value: Descendant[]) {
    const isAstChange = editor.operations.some(
      (op) => "set_selection" !== op.type
    );

    if (isAstChange) {
      const content = JSON.stringify(value);
      localStorage.setItem("@TextEditor:content", content);
    }
  }

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <Code {...props} />;
      case "title":
        return <Title {...props} />;
      case "quote":
        return <Quote {...props} />;
      case "list":
        return <List {...props} />;
      case "list-item":
        return <ListItem {...props} />;
      default:
        return <Default {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <Header theme={theme} onThemeChange={toggleTheme} />

      <div className="container">
        <main>
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
          <Slate
            editor={editor}
            value={initialValue}
            onChange={(value) => saveContent(value)}
          >
            <Editable
              onKeyDown={(e) => handleKeyDown(e)}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
            />
          </Slate>
        </main>
      </div>
    </>
  );
}
