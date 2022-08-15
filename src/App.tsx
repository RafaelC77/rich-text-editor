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
import { Leaf } from "./components/Leaf";
import { Title } from "./components/Title";
import { CustomEditor } from "./helpers/customEditor";

import "./index.css";

export function App() {
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
    if (!event.ctrlKey) {
      return;
    }

    switch (event.key) {
      case "c": {
        event.preventDefault();
        CustomEditor.toggleCodeBlock(editor);
        break;
      }

      case "y": {
        event.preventDefault();
        CustomEditor.toggleTitleBlock(editor);
        break;
      }

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

      case "q": {
        event.preventDefault();
        CustomEditor.toggleUnderlineMark(editor);
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
      default:
        return <Default {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div className="container">
      <h1>Rich-Text Editor</h1>

      <main>
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
  );
}
