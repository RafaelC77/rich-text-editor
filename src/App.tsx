import { useState } from "react";
import { createEditor, Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";

export function App() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue: Descendant[] = [];

  return (
    <div className="container">
      <h1>Rich-Text Editor</h1>

      <Slate editor={editor} value={initialValue}>
        <Editable />
      </Slate>
    </div>
  );
}
