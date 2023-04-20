import { Switch } from "@mui/material";
import { HeaderParallax, LiInformations, SectionTitles, SubTitle, Title, UlInformations } from "./style";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function Header() {
    const [State,SetState] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch({type:'SET_THEME', value: State})
    },[State])
    return (

        <>
            <HeaderParallax>
                <UlInformations>
                    <LiInformations >Sobre mim</LiInformations>
                    <LiInformations >Habilidades</LiInformations>
                    <LiInformations >Projetos</LiInformations>
                    <LiInformations >Contatos</LiInformations>
                    <Switch onClick={()=>{SetState(!State)}}/>
                </UlInformations>

                <SectionTitles className='section-titles'>
                    <Title className='title-name'>João Vitor De Lima</Title>
                    <SubTitle className='subtitle'>Desenvolvedor Web Back-End</SubTitle>

                </SectionTitles>
            </HeaderParallax >
        </>
    )


}