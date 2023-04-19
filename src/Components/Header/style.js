import styled from "styled-components";
import background from '../../assets/image.jpg'
export const HeaderParallax = styled.header`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh !important;
    overflow: hidden;
    background-attachment: fixed;
`
export const UlInformations = styled.ul`
    display: flex;
    flex-direction: row;
    color: #fff;
    padding: 20px;
    justify-content: end;
    gap: 35px;
    align-items: flex-end;
    list-style: none;
    cursor: pointer;
    font-size: clamp(0.7em, 0.7em + 1vw, 1.2em);
    @media(max-width:653px) {
        justify-content: center;
        gap: 15px;
        font-size: 15px;
    
    
}
`
export const LiInformations = styled.li`
    :hover{
        font-size: 21px;
        transition: 1s;
        text-shadow: 5px solid #fff;
    }

`
export const SectionTitles = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 50;
    position: relative;
    flex-direction:column;
    top: 110px;
    h1{
        font-size: clamp(0.7em, 1em + 5vw, 4em);
    }
    h2{
        padding: 5px;
        font-size: clamp(0.4em, 0.7em + 2vw, 2em);
    }


`
export const Title = styled.h1`
font-size: clamp(0.7em, 1em + 5vw, 4em);
`
export const SubTitle = styled.h2`
padding: 5px;
font-size: clamp(0.4em, 0.7em + 2vw, 2em);
`

