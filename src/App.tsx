import { KeyboardEvent, useCallback, useState } from "react";
import { createEditor, Descendant, Editor, Element, Transforms } from "slate";
import { Editable, RenderElementProps, Slate, withReact } from "slate-react";
import { Code } from "./components/Code";
import { Default } from "./components/Default";

import "./index.css";

export function App() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue: Descendant[] = [
    { type: "paragraph", children: [{ text: "Digite seu texto aqui..." }] },
  ];

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();

      const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === "code",
      });

      Transforms.setNodes(
        editor,
        { type: match ? "paragraph" : "code" },
        { match: (n) => Editor.isBlock(editor, n) }
      );
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

  return (
    <div className="container">
      <h1>Rich-Text Editor</h1>

      <main>
        <Slate editor={editor} value={initialValue}>
          <Editable
            onKeyDown={(e) => handleKeyDown(e)}
            renderElement={renderElement}
          />
        </Slate>
      </main>
    </div>
  );
}
