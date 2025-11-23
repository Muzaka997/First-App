import { useThemeContext } from "../theme/useThemeContext";
import { ToggleButton } from "./ThemeButton.styled";

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <ToggleButton onClick={toggleTheme}>{darkMode ? "☀️" : "🌑"}</ToggleButton>
  );
}
