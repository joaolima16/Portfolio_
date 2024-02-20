import { useState } from "react";
import github from "../../assets/github-logo.png";
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png'; 
import gmail from '../../assets/gmail.png'
import "./style.css";
export default function Footer() {
    return (
        <>
            <footer className="footer_container">
                <section className="content_container" id="contatos">
                    <span>Formas de contato</span>
                    <div className="social_media">
                            <a href="https://www.instagram.com/joaolimaz_/" rel="noreferrer" target="_blank"> <img src={insta} alt="Logo do Instagram" /> </a>
                            <a href="https://www.linkedin.com/in/joão-goncalves/" rel="noreferrer" target="_blank"> <img src={linkedin} alt="Logo do LinkedIn" /> </a>
                            <a href="https://github.com/joaolima16"  rel="noreferrer" target="_blank"> <img src={github} alt="Logo do Github" /> </a>
                            <a href="https://wa.me/55956593989" rel="noreferrer" target="_blank"> <img src={whatsapp} alt="Logo do Whatsapp" /></a>
                            <a href="mailto:joaovitordlg23101@gmail.com?subject=Portfólio"  rel="noreferrer"  target="_blank"> <img src={gmail} alt="Logo do Gmail" /></a>
                    </div>
                    <p className="copyright">&copy; 2024 João Vitor De Lima Gonçalves. Todos os direitos reservados.</p>
                </section>
            </footer>

        </>

    )
}