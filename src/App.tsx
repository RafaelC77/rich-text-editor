import { useState } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";

export function App() {
  const editor = useState(() => withReact(createEditor()));

  return <h1>Rich-Text Editor</h1>;
}
