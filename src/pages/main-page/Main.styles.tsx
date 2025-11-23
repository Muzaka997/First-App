import styled from "styled-components";

export const AppWrapper = styled.div<{ darkMode: boolean }>`
  background: ${(p) => (p.darkMode ? "#000" : "#fff")};
  color: ${(p) => (p.darkMode ? "#eee" : "#222")};
  font-family: system-ui, sans-serif;
  min-height: 100vh;
`;

export const Header = styled.header<{ darkMode: boolean }>`
  background: ${(p) => (p.darkMode ? "#111" : "#fff")};
  color: ${(p) => (p.darkMode ? "#fff" : "#111")};
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid ${(p) => (p.darkMode ? "#333" : "#eee")};
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a<{ darkMode: boolean }>`
  color: ${(p) => (p.darkMode ? "#fff" : "black")};
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    color: ${(p) => (p.darkMode ? "#fff" : "#000")};
  }
`;

export const Hero = styled.section<{ darkMode: boolean }>`
  text-align: center;
  padding: 4rem 1rem;
  background: ${(p) => (p.darkMode ? "#111" : "#f7f7f7")};
  color: ${(p) => (p.darkMode ? "#eee" : "#222")};

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const CTAButton = styled.button<{ darkMode: boolean }>`
  margin-top: 1.5rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${(p) => (p.darkMode ? "#444" : "#333")};
  color: white;
  transition: 0.2s;

  &:hover {
    background: ${(p) => (p.darkMode ? "#222" : "#000")};
  }
`;

export const Features = styled.section<{ darkMode: boolean }>`
  background: ${(p) => (p.darkMode ? "#222" : "#333")};
  color: ${(p) => (p.darkMode ? "#ddd" : "white")};
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 12px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    line-height: 2;
  }
`;

export const Footer = styled.footer<{ darkMode: boolean }>`
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
  border-top: 1px solid ${(p) => (p.darkMode ? "#333" : "#eee")};
  font-size: 0.9rem;
  color: ${(p) => (p.darkMode ? "#aaa" : "#666")};
`;
