import styled from 'styled-components';

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;

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

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const MainSection = styled.section`
  width: 100%;
  height: 85%;
  display: flex;
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
  }
  
`
export const SeparateBar = styled.section`
  width: 2px;
  height: 23%;
  margin: auto 30px;
  background-color: var(--first-color);

  @media screen and (max-width: 1200px) {
    width: 0;
    height: 0;
    margin: 5px auto;
  }
`;

export const SkillSection = styled.section`
  width: 103%;
  height: 20%;
  background: hsl(var(--hue-color), 28%, 12%);
  margin-left:-25px;
  padding: 0 10%; 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

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
`

export const PhotoSection = styled.section`
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 10px;
  margin-top: -14px;

`

export const Image = styled.div`
  min-width: 400px;
  justify-content: center;
`

export const GalleryPhotoSection = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const ImgGallery = styled.img`
  border: 1px solid #ddd; 
  border-radius: 4px;  
  padding: 5px; 
  width: 150px; 
  margin: 0 3px;
  
  max-height: 150px; 
  object-fit: cover;
`;