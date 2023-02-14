import styled, { css } from 'styled-components';

export const Slider = styled.div`
  position: relative;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  font-size: 45px;
  color: var(--first-color);
  z-index: 1;
  cursor: pointer;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  font-size: 45px;
  color: var(--first-color);
  z-index: 1;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: .5rem;
  justify-self: center;

  border: 1px solid #ddd; 
  border-radius: 4px;  
  padding: 2px; 
  
  object-fit: cover;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const ContainerBolinhas = styled.div`
  width: 100%;  
  display: flex;
  justify-content: center;
  height: 10px;
`;

interface BolinhaProps {
  active: boolean;
}
export const Bolinha = styled.div<BolinhaProps>`
  width: 10px;  
  height: 10px;
  border-radius: 100%;
  border: 1px solid var(--first-color);
  margin: 0 4px;
  cursor: pointer;
  
  ${props => props.active && 
    css`
      background-color: var(--first-color);
    `
  }
`;



