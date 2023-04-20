import Slider from 'react-slick';
import imgSgp from '../../assets/Departamento.png'
import imageDashboard from '../../assets/dashboard.PNG'
import './style.css';
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
      project: "Sistema de Gerenciamento De Patrimônios", images: imgSgp
      , link: "https://github.com/joaolima16/SGP-Sistema-De-Gerenciamento-De-Patrimonios"
    },
    {
      project: "Dashboard de Criptomoedas", images: [imageDashboard],
      link: "https://github.com/joaolima16/Dashboard-CriptoCoins"
    }

  ]
  return (

    <>

      <h1 className='Titleprojects'> Projetos</h1>
      <section className="CarroselWrapper">


        <Slider {...settings}>
          {
            Projects.map(({ project, images, link }) => {
              return (
                <div className='img-wrapper'>
                  <a href={link} target='_blank'>
                    <img className="img-carrosel" src={images} />
                  </a>
                  <p className='name-project'>{project}</p>
                </div>
              )
            })
          }
        </Slider>


      </section>

    </>
  )
}