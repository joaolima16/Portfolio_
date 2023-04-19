import { HeaderParallax, LiInformations, SectionTitles, SubTitle, Title, UlInformations } from "./style";
export default function Header() {
    return (
        <>
            <HeaderParallax>
                <UlInformations>
                    <LiInformations >Sobre mim</LiInformations>
                    <LiInformations >Habilidades</LiInformations>
                    <LiInformations >Projetos</LiInformations>
                    <LiInformations >Contatos</LiInformations>

                </UlInformations>

                <SectionTitles className='section-titles'>
                    <Title className='title-name'>João Vitor De Lima</Title>
                    <SubTitle className='subtitle'>Desenvolvedor Web Back-End</SubTitle>

                </SectionTitles>
            </HeaderParallax >
        </>
    )


}