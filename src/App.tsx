import { KeyboardEvent, useCallback, useState } from "react";
import {
  createEditor,
  Descendant,
  Editor,
  Element,
  Text,
  Transforms,
} from "slate";
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
import { CustomEditor } from "./helpers/customEditor";

import "./index.css";

export function App() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue: Descendant[] = [
    {
      type: "paragraph",
      children: [{ text: "Digite seu texto aqui..." }],
    },
  ];

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

      case "b": {
        event.preventDefault();
        CustomEditor.toggleBoldMark(editor);
        break;
      }
    }
  }

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <Code {...props} />;
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
        <Slate editor={editor} value={initialValue}>
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
