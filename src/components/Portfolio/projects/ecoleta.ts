
import ecoleta1 from "../../../assets/projects/ecoleta/1.webp";
import ecoleta2 from "../../../assets/projects/ecoleta/2.webp";
import ecoleta3 from "../../../assets/projects/ecoleta/3.webp";
import ecoleta4 from "../../../assets/projects/ecoleta/4.webp";
import ecoleta5 from "../../../assets/projects/ecoleta/5.webp";
import { css, html, javascript, node, postgresql, react, reactNative, typescript } from "../skills";

const skills = [
	react,
	node,
	reactNative,
	typescript,
	javascript,
	css,
	html,
	postgresql,
];

const images = [
	ecoleta1,
	ecoleta2,
	ecoleta3,
	ecoleta4,
	ecoleta5
];

export const enEcoleta = {
  title: "Ecoleta",
  description: `Ecoleta is an eco-friendly waste management platform, created to connect companies and waste collection entities for organic and inorganic waste to people looking to dispose of their waste in a sustainable manner.\n\n

	The application consists of an API built with Node.js and Typescript, as well as a web front-end developed with React JS and also using Typescript. The web front-end allows companies to register their data and geographical location through React Leaflet, and select the types of waste they are willing to receive.\n\n
	
	To enhance the user experience, the application also has a mobile version made with React Native and Typescript. Through this front, users can view nearby companies on a map, as well as detailed information about their locations and types of waste that are accepted.\n\n
	
	Ecoleta was a project carried out during the NextLevelWeek course by Rocketseat in 2020, which helps preserve the environment and connect people and companies committed to sustainability.`,
	images,
  skills,
};

export const ptEcoleta = {
  title: "Ecoleta",
  description: `Ecoleta é uma plataforma de gerenciamento de resíduos ecológicos, criada para conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos a pessoas que buscam descartar seus resíduos de forma sustentável.\n\n

	A aplicação é composta por uma API construída com Node.js e Typescript, além de um front-end web desenvolvido com React JS e também utilizando Typescript. O front-end web permite às empresas cadastrar seus dados e sua localização geográfica através do React Leaflet, e selecionar os tipos de resíduos que estão dispostos a receber.\n\n
	
	Para complementar a experiência do usuário, a aplicação também possui uma versão mobile feita com React Native e Typescript. Através deste front, os usuários podem visualizar em um mapa as empresas mais próximas, bem como informações detalhadas sobre suas localizações e tipos de resíduos que são aceitos.\n\n
	
	A Ecoleta foi um projeto realizado durante o curso NextLevelWeek da Rocketseat em 2020, que ajuda a preservar o meio ambiente e a conectar pessoas e empresas comprometidas com a sustentabilidade.`,
	images,
  skills,
}