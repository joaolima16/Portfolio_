import imgSgp from "../../assets/Departamento.png";
import imageDashboard from "../../assets/dashboard.PNG";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";

export default function CarroselProjects() {
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
      <section className="CarroselWrapper">
        <h1 className="Title">Projetos</h1>
        <Slider {...settings}>
          {Projects.map(({project,images})=>{
            return(
              <img className="image_slider" src={images} />
            )
          })}
        </Slider>
      </section>
    </>
  );
}
