import { useCallback, useMemo, useState } from "react";
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
import { Toolbar } from "./components/Toolbar";
import { handleKeyDown } from "./helpers/keyboardShortcuts";

import "./index.css";

export function App() {
  const [theme, setTheme] = useState("light");
  const [editor] = useState(() => withReact(createEditor()));

  const isDarkTheme = theme === "dark";

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

      <div className={`background ${isDarkTheme && "dark-theme"}`}>
        <div className="container">
          <main className={`${isDarkTheme ? "dark-theme-main" : ""}`}>
            <Toolbar editor={editor} />

            <div className="editor-container">
              <Slate
                editor={editor}
                value={initialValue}
                onChange={(value) => saveContent(value)}
              >
                <Editable
                  onKeyDown={(e) => handleKeyDown(e, editor)}
                  renderElement={renderElement}
                  renderLeaf={renderLeaf}
                />
              </Slate>
            </div>
          </main>
          <footer>RT Editor 2022</footer>
        </div>
      </div>
    </>
  );
}
