
import analysis1 from "../../../assets/projects/analysis/details.webp";
import analysis2 from "../../../assets/projects/analysis/home.webp";
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
	analysis1,
  analysis2,
];

export const enAnalysis = {
	id: 'analysis',
  title: "Repositories Analysis",
  description: `This web development project is an advanced platform for searching GitHub repositories. Using cutting-edge technologies like React JS, TypeScript, CSS, Styled Components, and HTML, this project provides a sleek and intuitive solution for users.\n\n

	The search functionality enables users to easily search for GitHub repositories using the GitHub API, offering a wide range of accurate results. After conducting a search, the results are displayed in an organized list, allowing users to click on a specific repository and be directed to a detailed page about it.\n\n
	
	On this page, users can view detailed information about the selected repository, including stars, forks, and open issues. Additionally, a link to the original repository on GitHub is also available for users, providing them with even more information and resources.`,
	images,
  skills,
};

export const ptAnalysis = {
	id: 'analysis',
  title: "Análise de Repositórios",
  description: `Este projeto de desenvolvimento web é uma plataforma avançada para a realização de buscas de repositórios no GitHub. Utilizando as tecnologias React JS, TypeScript, CSS, Styled Components e HTML, este projeto oferece uma solução eficiente e intuitiva para os usuários.\n\n

	A funcionalidade de busca permite aos usuários procurarem por repositórios do GitHub utilizando a API do GitHub, oferecendo uma ampla gama de resultados precisos. Após a realização da busca, os resultados são apresentados em uma lista organizada, permitindo que os usuários cliquem em um certo repositório e sejam direcionados para uma página detalhada acerca do mesmo.\n\n
	
	Nesta página, os usuários podem visualizar informações detalhadas sobre o repositório selecionado, incluindo as estrelas, forks e issues abertas. Além disso, um link para o repositório original no GitHub também está disponível para os usuários, permitindo-lhes acessar ainda mais informações e recursos`,
	images,
  skills,
}