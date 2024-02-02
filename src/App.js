import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './App.css';
import AboutMe from './Components/AboutMeSection';
import CarroselProjects from './Components/CarroselProjects';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import SkillPage from './Components/SkillsPage';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import { DarkTheme, LightTheme } from './GlobalStyle/Theme';

function App() {

    
  const selector = useSelector((State) => State.ThemeReducer.value);
  return (
    <>

      <ThemeProvider theme={selector === false ? LightTheme : DarkTheme}>
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
