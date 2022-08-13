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

import "./index.css";

export function App() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue: Descendant[] = [
    {
      type: "paragraph",
      children: [{ text: "Digite seu texto aqui...", bold: false }],
    },
  ];

  function handleKeyDown(event: KeyboardEvent) {
    if (!event.ctrlKey) {
      return;
    }

    switch (event.key) {
      case "c": {
        event.preventDefault();

        const [match] = Editor.nodes(editor, {
          match: (n) => Element.isElement(n) && n.type === "code",
        });

        Transforms.setNodes(
          editor,
          { type: match ? "paragraph" : "code" },
          { match: (n) => Editor.isBlock(editor, n) }
        );
        break;
      }

      case "b": {
        event.preventDefault();

        Transforms.setNodes(
          editor,
          { bold: true },
          { match: (n) => Text.isText(n), split: true }
        );
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
