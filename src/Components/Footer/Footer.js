import { useState } from "react";
import "./style.css";
import githubLogo from "../../assets/github.png";
import instaLogo from '../../assets/insta.png'
import linkedinLogo from '../../assets/linkedin.png'
export default function Footer() {
    const [sizeCharacters, SetSizecharacters] = useState([]);
    const CountCharacters = () => {

    }
    return (
        <>
            <footer className="footer_container">
                <h1 className="title_footer">Deseja entrar em contato? me envie um E-mail</h1>

                <form className="container_form">
                    <input type="Email" placeholder="Email" className="input_text" />
                    <input type="text" placeholder="Assunto" className="input_text" />
                    <textarea className="input_area"/>
                    <input type="button" placeholder="Enviar" className="btn_submit"/>
                </form>
            </footer>
        </>

    )
}