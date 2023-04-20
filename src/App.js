import { useState } from 'react';
import './App.css';
import AboutMe from './Components/AboutMeSection';
import Header from './Components/Header';
import SkillPage from './Components/SkillsPage';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './GlobalStyle/Theme';
import CarroselProjects from './Components/CarroselProjects';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const [Theme, SetTheme] = useState("light");
  const dispatch = useDispatch();
  const selector = useSelector((State) =>State.ThemeReducer.value);
  return (
    <>
      <ThemeProvider theme={selector == false? LightTheme: DarkTheme}>
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
