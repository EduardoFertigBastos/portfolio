import styled, { css } from 'styled-components';

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 17px 23px 0 50px;

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
  width: 100%;
  height: 94%;

`;

export const MainSection = styled.section`
  padding: 20px 20px 0 20px;

  width: 100%;
  min-height: 80%;
  display: flex;

  @media screen and (max-width: 1500px) {
    display: flex;
    width: 90%;
    
    flex-direction: column-reverse;
    margin-bottom: 20px;
    margin: 0 40px 20px 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 0px;
    margin: 0 auto 20px auto;
  }
`

export const DescriptionSection = styled.section`
  width: 50%;
  height: 100%;
  margin-right: 10px;
  
  h2 {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-5);
  }

  p {
    margin-bottom: var(--mb-0-75);
    text-align: justify;
    font-size: 1.2rem;
    
    @media screen and (max-width: 100px) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 1rem;
    }
  }
  
  @media screen and (max-width: 1500px) {
    width: 100%;
  }


`
export const SeparateBar = styled.section`
  width: 2px;
  height: 200px;
  margin: auto 30px;
  background-color: var(--first-color);

  @media screen and (max-width: 1500px) {
    width: 0;
    height: 0;
    margin: 5px auto;
  }
`;


interface SkillProps {
  quantity: number;
}

export const SkillSection = styled.section<SkillProps>`
  height: 20%;
  background: hsl(var(--hue-color), 28%, 12%);
  padding: 0 10% 0 10%; 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${(prop:SkillProps) => prop.quantity > 8 
    && css`
      @media screen and (max-width: 1300px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        svg {
          display: none !important;
        }
      }
    `
  }
  
  
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }  
`;



export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.4s;

  svg {
    font-size: 3.8rem;
    
    display: block;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1500px) {
    svg {
      font-size: 3rem;
    }
    
    font-size: 1rem;
  }

  @media screen and (max-width: 900px) {
    svg {
      font-size: 2rem;
    }

    font-size: 0.8rem;
  }

  @media screen and (max-width: 800px) {

    svg {
      display: none;
    }

    &:hover {
      transform: scale(1);
    }
  }
`

export const PhotoSection = styled.section`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -14px;


  @media screen and (max-width: 1500px) {
    margin-top: 0px;
    width: 100%;
  }
`

export const Image = styled.div`
  min-width: 400px;
  justify-content: center;
`;