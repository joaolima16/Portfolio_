import { useState } from "react";
import githubLogo from "../../assets/github.png";
import instaLogo from '../../assets/insta.png';
import linkedinLogo from '../../assets/linkedin.png';
import "./style.css";
export default function Footer() {
    const [sizeCharacters, SetSizecharacters] = useState([]);
    const CountCharacters = () => {

    }
    return (
        <>
            <footer className="footer_container">

                <section className="container_wrapper">
                    <h1 className="title_footer">Deseja entrar em contato? envie um e-mail</h1>
                    <form className="form_mail">
                        <input type="email" className="input_form" placeholder="E-mail" />
                        <input type="text" className="input_form" placeholder="Assunto" />
                        <textarea className="input_form_area" maxLength={200} onChange={(e) => { SetSizecharacters(e.target.value) }} />
                        {/* <p className="max_character">Máximo De Caracteres 0/200</p> */}
                        <button className="btnSubmit">Enviar</button>
                    </form>
                    <div>
                        <nav className="wrapper_links">
                            <a href="https://github.com/joaolima16"> <img src={githubLogo} className="logo_socials" /></a>
                            <a href=""><img src={instaLogo} className="logo_socials" /></a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-goncalves/"><img src={linkedinLogo} className="logo_socials" /> </a>
                        </nav>
                    </div>
                </section>
            </footer>

        </>

    )
}