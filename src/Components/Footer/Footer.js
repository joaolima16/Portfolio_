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
                <h1>Deseja entrar em contato? me envie um E-mail</h1>

                <form className="container_form">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Email" />
                </form>
            </footer>
        </>

    )
}