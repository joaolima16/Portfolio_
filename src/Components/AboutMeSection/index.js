import './style.css'
import image from '../../assets/perfil.jpg'
import { Fade } from 'react-reveal';
import { useState } from 'react';

export default function AboutMe() {
    const [State, SetState] = useState(false);
    window.addEventListener('scroll', () => {

        if (State != true && document.documentElement.scrollTop > 135) {
            return SetState(true);
        }
        if (State != false && document.documentElement.scrollTop < 107) {
            return SetState(false);
        }
    });
    return (
        <>

            <h1 className='title' id="aboutMe">Sobre mim</h1>
            <main className='Wrapper'>
                <Fade left duration={2500} when={State}>
                    <section className='Content' >
                        <p className='Content-text'>Me chamo João, tenho 18 anos, estudo programação há 2 anos,
                            tenho conhecimentos em HTML e CSS3, nas linguagens: JavaScript, Java, C# e Python, conhecimento em banco de dados relacional e não relacional e conhecimento básico em versionamento de código com Git e GitHub. Tenho conhecimentos em Front-end utilizando ReactJs mas meu foco é a área de Back-end
                            utilizando a biblioteca NodeJs para a criação de Web Apis e comunicação com banco de dados.
                        </p>
              
                        <button className='btnCv'>Download CV</button>
                    </section>
                    <section className='content-image' >
                        <img src={image} />
                    </section>
                </Fade>
            </main>

        </>
    )
}