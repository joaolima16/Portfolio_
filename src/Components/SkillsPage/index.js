import './style.css';
import Js from '../../assets/js.png';
import Node from '../../assets/node.png'
import ts from '../../assets/ts.png'
import java from "../../assets/java.png"
import csharp from '../../assets/Csharp.png';
import react from '../../assets/react.png'
import { Fade } from 'react-awesome-reveal'
import { useState } from 'react';
import mysql from '../../assets/mysql.png';
import git from '../../assets/git.png'
import python from '../../assets/python.png';

const objLanguages = [
    { name: "JavaScript", img: Js, link: "https://github.com/joaolima16/SGP-Sistema-De-Gerenciamento-De-Patrimonios" },
    { name: "NodeJs", img: Node, link: "https://github.com/joaolima16/PROJETO_portfolio"},
    { name: "TypeScript", img: ts, link: "https://github.com/joaolima16/backend_kmg" },
    { name: "Java", img: java, link: "https://github.com/joaolima16/SENAC_PI" },
    { name: "Csharp", img: csharp, link: "https://github.com/joaolima16/Projeto-WindowsForms" },
    { name: "ReactJs", img: react },
    { name: "MySql", img: mysql },
    { name: "Git/Github", img: git },
    { name: "Python", img: python }

]
export default function SkillPage() {
    const [State, SetState] = useState(false);
    window.addEventListener('scroll', () => {
        if (State != true && document.documentElement.scrollTop > 700) {
            return SetState(true);
        }
        if (State != false && document.documentElement.scrollTop < 630) {
            return SetState(false);
        }
    })
    return (
        <Fade right duration={2000} when={State}>
            <section class="wrapper_skills">

                <h1 className='title' id="skills">Habilidades</h1>

                <main class="skills_box">

                    {
                        objLanguages.map(({ name, img, link }) => {
                            return (
                                <div class="box_item" >
                                    <a href={link}  rel="noreferrer" target='_blank' class="ag-courses-item_link">
                                        <div class="ag-courses-item_bg" ></div>

                                        <div class="ag-courses-item_title">
                                            <img className="img-box" src={img} alt={`Linguagem: ${name}`}/>
                                        </div>

                                        <span className='box_text'>{name}</span>

                                    </a>

                                </div>

                            )
                        })
                    }

                </main>

            </section>
        </Fade>
    )
}
