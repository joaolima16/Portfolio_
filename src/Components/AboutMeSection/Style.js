import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    margin: 0 auto;
    top: 30px;
    align-items: center;
    @media(max-width:707px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items:center;
}

`
export const Content = styled.section`
    width: 80%;
    height: 100%;

`
export const ContentText = styled.p `
    margin: 20px;
    text-transform: capitalize;
    font-size: 1rem;
    text-align: justify;
    font-weight: 400;
    line-height: 180%;
    @media(max-width:707px) {
     width:100%;
}
`
export const ContentImage = styled.section`
    width: 80%;
    height: 100%;
    margin: 0 auto;

`
export const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: relative;
    right:30%;
`