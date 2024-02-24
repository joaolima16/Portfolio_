import { Switch } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './style.css';

export default function Header() {
    const [State, SetState] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'SET_THEME', value: State })
    }, [State])
    return (

        <>
            <header className="header_parallax">
                <ul className='list_informations'>
                    <a href="#aboutMe"><li className='informations'>Sobre mim</li></a>
                    <a href="#skills"><li className='informations'>Habilidades </li> </a>
                    <a href="#projects"><li className='informations'>Projetos</li></a>
                    <a href="#contatos"><li className='informations'>Contatos</li></a>
                    
                    <Switch onClick={() => { SetState(!State) }} />
                </ul>

                <section className='section_titles'>
                    <h1 className='name'>João Vitor De Lima</h1>
                    <h2 className='subtitle'>Desenvolvedor Web Back-End</h2>

                </section>
            </header >
        </>
    )


}