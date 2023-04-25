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
import { Routes, Route,Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {

    
  const selector = useSelector((State) => State.ThemeReducer.value);
  return (
    <>

      <ThemeProvider theme={selector == false ? LightTheme : DarkTheme}>
          <GlobalStyle />
          <Header />
        <AboutMe />
          <SkillPage />
          <CarroselProjects />
          <Footer />
      </ThemeProvider>
   
    </>
  );
}

export default App;
