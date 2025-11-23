import { useThemeContext } from "../../theme/useThemeContext";
import {
  AppWrapper,
  Header,
  Logo,
  Nav,
  NavLink,
  Hero,
  CTAButton,
  Features,
  Footer,
} from "./Main.styles";

function MainPage() {
  const { darkMode } = useThemeContext();

  return (
    <AppWrapper darkMode={darkMode}>
      <Header darkMode={darkMode}>
        <Logo>MyApp</Logo>
        <Nav>
          <NavLink darkMode={darkMode} href="#">
            Home
          </NavLink>
          <NavLink darkMode={darkMode} href="#">
            Features
          </NavLink>
          <NavLink darkMode={darkMode} href="#">
            Contact
          </NavLink>
        </Nav>
      </Header>

      <Hero darkMode={darkMode}>
        <h2>Welcome to MyApp</h2>
        <p>A modern React + TypeScript application template.</p>
        <CTAButton darkMode={darkMode}>Get Started</CTAButton>
      </Hero>

      <Features darkMode={darkMode}>
        <h3>Features</h3>
        <ul>
          <li>⚡ Fast & lightweight</li>
          <li>🔒 Type-safe with TypeScript</li>
          <li>🎨 Clean, modern UI</li>
          <li>🚀 Ready for real projects</li>
        </ul>
      </Features>

      <Footer darkMode={darkMode}>
        <p>© {new Date().getFullYear()} MyApp — All rights reserved.</p>
      </Footer>
    </AppWrapper>
  );
}

export default MainPage;
