import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import imgSgp from "../../assets/Departamento.png";
import githubImage from "../../assets/github.png";
import imageDashboard from "../../assets/dashboard.PNG";
import "./style.css";
import { useState } from "react";

export default function CarroselProjects() {
  const [hover,setHover] = useState(false);
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  const Projects = [
    {
      project: "Sistema de Gerenciamento De Patrimônios",
      images: imgSgp,
      link: "https://github.com/joaolima16/SGP-Sistema-De-Gerenciamento-De-Patrimonios",
    },
    {
      project: "Sistema de Gerenciamento De Patrimônios",
      images: imgSgp,
      link: "https://github.com/joaolima16/SGP-Sistema-De-Gerenciamento-De-Patrimonios",
    },
    {
      project: "Sistema de Gerenciamento De Patrimônios",
      images: imgSgp,
      link: "https://github.com/joaolima16/SGP-Sistema-De-Gerenciamento-De-Patrimonios",
    },
    {
      project: "Dashboard de Criptomoedas",
      images: imageDashboard,
      link: "https://github.com/joaolima16/Dashboard-CriptoCoins",
    },
  ];

  return (
    <>
      <section className="carrosel_Wrapper">
        <h1 className="title_Projects" id="projects">Projetos</h1>
        <Slider {...settings}>
          {Projects.map(({project,images, link})=>{
            return(
              <figure className="fig_slider" onMouseEnter={() => setHover(true)} onMouseLeave={()=>{setHover(false)}} >
                       <a href={link} target="_blank" className="link_Github">
                          <img  className={hover===true? "image_Slider_onHover": "image_Slider_leaveHover"} src={images} alt="Carrosel de projetos"/>
                      </a>
                      <div className="more_Informations">
                          <span className={hover ==true? "name_Project": "name_Project_LeaveHover"}>{project}</span>
                          <a href={link} target="_blank" className="link_Github">
                              <img  className={hover===true? "image_github_onHover": "image_github_leaveHover"} src={githubImage}  alt="Imagem do github"/>
                          </a>
                      </div>
                      
              </figure>
             
            )
          })}
        </Slider>
      </section>
    </>
  );
}
