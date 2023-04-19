import { useState } from 'react';
import './App.css';
import AboutMe from './Components/AboutMeSection';
import Header from './Components/Header';
import SkillPage from './Components/SkillsPage';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './GlobalStyle/Theme';
import CarroselProjects from './Components/CarroselProjects';

function App() {
  const [Theme, SetTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={DarkTheme}>
            <GlobalStyle />
            <Header />
            <AboutMe />
            <SkillPage />
            <CarroselProjects />
      </ThemeProvider>
      
    </>
  );
}

export default App;
