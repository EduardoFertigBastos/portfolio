
import addpost3 from "../../../assets/projects/addpost/3.png";
import addpost2 from "../../../assets/projects/addpost/empty.png";
import addpost from "../../../assets/projects/addpost/filled.png";
import {
	css,
	html,
	javascript,
	react,
	styledComponents,
	typescript,
} from "../skills";

const skills = [
	react,
	typescript,
	javascript,
	css,
	styledComponents,
	html,
];

const images = [
  addpost2,
  addpost3,
	addpost,
];

export const enAddPosts = {
  title: "Add Posts",
  description: `This project is a modern and intuitive solution for content creation and management, built with the most up-to-date development technologies including React, TypeScript, CSS, Styled Components, and HTML. \n\n

	The application allows users to create posts including an image, title, and message, adding them to an organized and easily accessible list. Additionally, users can also remove unwanted posts with a single click on an intuitive button. \n\n
	
	With a responsive interface designed with the best design practices, this project ensures a smooth and satisfying user experience regardless of the device used.`,
	images,
  skills,
};

export const ptAddPosts = {
  title: "Add Posts",
  description: `Este projeto é uma solução moderna e intuitiva para a criação e gerenciamento de conteúdo, construída com as tecnologias de desenvolvimento mais atualizadas, incluindo React, TypeScript, CSS, Styled Components e HTML. \n\n

	A aplicação permite que os usuários cadastrem posts, incluindo uma imagem, um título e uma mensagem, adicionando-os a uma lista organizada e facilmente acessível. Além disso, os usuários também podem remover posts indesejados com um único clique em um botão intuitivo.\n\n
	
	Com uma interface responsiva e desenvolvida com as melhores práticas de design, este projeto garante uma experiência do usuário fluida e satisfatória, independentemente do dispositivo utilizado.`,
	images,
  skills,
}