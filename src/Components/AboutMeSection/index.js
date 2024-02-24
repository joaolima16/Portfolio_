import './style.css'
import image from '../../assets/perfil.jpg'
import { Fade } from 'react-awesome-reveal';
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
            <main className='wrapperAbout'>
                <Fade left duration={2500} when={State}>
                    <section className='content' >
                        <p className='content_Text'>
                            Me chamo João, tenho 19 anos e estudo programação há 3 anos. Possuo conhecimentos sólidos em JavaScript, Node.Js e React.Js. 
                            Atualmente, estou explorando Spring Boot e aprimorando minhas habilidades em bancos de dados relacional e não relacional. Tenho familiaridade com Git e GitHub para versionamento de código. Meu foco principal está no Back-end, utilizando NodeJs para desenvolver Web APIs e integrar com bancos de dados. Estou sempre em busca de desafios e oportunidades para aprimorar minhas habilidades e contribuir em projetos inovadores.
                        </p>
              
                        <a href="https://drive.google.com/uc?export=download&id=1LHAbmhojmjHuuxuLxELH_nNAoGvZfwuP" target='_blank'> <button className='btnCv'>Download CV</button></a>
                    </section>
                    <section className='content_Image' >
                        <img src={image} alt="Imagem de perfil"/>
                    </section>
                </Fade>
            </main>

        </>
    )
}