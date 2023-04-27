import { Switch } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './style.css';
import { Link } from "react-router-dom";
export default function Header() {
    const [State, SetState] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'SET_THEME', value: State })
    }, [State])
    return (

        <>
            <header className="Header-parallax">
                <ul className='list-informations'>
                    <a href="#aboutMe"><li className='informations'><a href="#aboutMe" />Sobre mim</li> </a>
                    <a href="#skills"><li className='informations'>Habilidades </li> </a>
                    <a href="#projects"><li className='informations'>Projetos</li></a>
                    <li className='informations'>Contatos</li>
                    <Switch onClick={() => { SetState(!State) }} />
                </ul>



                <section className='section-titles'>
                    <h1 className='title-name'>João Vitor De Lima</h1>
                    <h2 className='subtitle'>Desenvolvedor Web Back-End</h2>

                </section>
            </header >
        </>
    )


}