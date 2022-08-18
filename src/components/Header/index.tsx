import { Moon, Sun } from "phosphor-react";
import "./style.css";

interface HeaderProps {
  theme: string;
  onThemeChange: () => void;
}

export function Header({ theme, onThemeChange }: HeaderProps) {
  const isDarkTheme = theme === "dark";

  return (
    <header>
      <div className="container box">
        <h1>RT Editor</h1>
        <button onClick={onThemeChange}>
          <div className={`theme-switcher ${isDarkTheme && "dark"}`}>
            <div className={`switch`}>
              {theme === "light" ? (
                <Moon weight="fill" size={16} />
              ) : (
                <Sun size={16} weight="fill" />
              )}
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
