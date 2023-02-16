
import g2 from "../../../assets/projects/github_users/details.webp";
import g1 from "../../../assets/projects/github_users/list.webp";
import {
	bootstrap,
	css,
	html,
	javascript,
	node,
	react,
	typescript,
} from "../skills";

const skills = [
	node,
	react,
	typescript,
	javascript,
	css,
	bootstrap,
	html,
];

const images = [
  g1,
  g2,
];

export const enGithubUsers = {
	id: 'githubusers',
  title: "Github Users",
  description: `This project is a web application to display GitHub user information. It consists of a backend built with Node.js and TypeScript, with integration to the GitHub API to retrieve the data. The project's front-end was developed using React JS and TypeScript and features a list of all GitHub users with pagination.\n\n

	When clicking on one of the users, the user is redirected to a new page, where personal data of the user is presented, as well as a table listing the name and URL of all the repositories created by him. The interface is intuitive and easy to use, providing a complete view of the data of GitHub users.\n\n
	
	The project uses state-of-the-art technologies such as Node.js and React JS to ensure good performance and a satisfying user experience. In addition, the use of TypeScript helps ensure code quality, facilitating maintenance and enabling future developments.\n\n
	
	In summary, this project is an efficient and user-friendly solution for visualizing GitHub user data, with a clean and intuitive interface and cutting-edge technologies to ensure performance and quality.`,
	images,
  skills,
};

export const ptGithubUsers = {
	id: 'githubusers',
  title: "Usuários do Github",
  description: `Este projeto é uma aplicação web para exibir informações de usuários do GitHub. Ele é composto por um backend construído com Node.js e TypeScript, com integração à API do GitHub para obter os dados. O front-end do projeto foi desenvolvido utilizando React JS e TypeScript e apresenta uma lista de todos os usuários do GitHub com paginação.\n\n

	Ao clicar em um dos usuários, o usuário é redirecionado para uma nova página, onde são apresentados alguns dados pessoais do usuário, bem como uma tabela listando o nome e a URL de todos os repositórios criados por ele. A interface é intuitiva e fácil de usar, fornecendo uma visão completa dos dados dos usuários do GitHub.\n\n
	
	O projeto utiliza tecnologias de última geração, como Node.js e React JS, para garantir uma boa performance e uma experiência de usuário satisfatória. Além disso, o uso de TypeScript ajuda a garantir a qualidade do código, facilitando manutenção e possibilitando novos desenvolvimentos futuros.\n\n
	
	Em resumo, este projeto é uma solução eficiente e fácil de usar para visualização de dados de usuários do GitHub, com uma interface limpa e intuitiva e tecnologias de ponta para garantir a performance e qualidade.`,
	images,
  skills,
}