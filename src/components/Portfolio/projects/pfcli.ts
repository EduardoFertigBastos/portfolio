
import p1 from "../../../assets/projects/pfcli/1.webp";
import p10 from "../../../assets/projects/pfcli/10.webp";
import p11 from "../../../assets/projects/pfcli/11.webp";
import p2 from "../../../assets/projects/pfcli/2.webp";
import p3 from "../../../assets/projects/pfcli/3.webp";
import p4 from "../../../assets/projects/pfcli/4.webp";
import p5 from "../../../assets/projects/pfcli/5.webp";
import p6 from "../../../assets/projects/pfcli/6.webp";
import p7 from "../../../assets/projects/pfcli/7.webp";
import p8 from "../../../assets/projects/pfcli/8.webp";
import p9 from "../../../assets/projects/pfcli/9.webp";
import {
	css,
	html,
	javascript,
	materialui,
	node,
	postgresql,
	react,
	styledComponents,
	typescript,
} from "../skills";

const skills = [
	node,
	react,
	typescript,
	javascript,
	css,
	styledComponents,
	materialui,
	html,
	postgresql
];

const images = [
	p1,
	p2,
	p3,
	p4,
	p5,
	p6,
	p7,
	p8,
	p9,
	p10,
	p11,
];

export const enPfcli = {
  title: "Add Posts",
  description: `This is a web application that provides a platform for registering establishments and their associated data, including their geographic coordinates through a map, and their products related to different categories for people with food intolerances (such as celiacs, lactose intolerants, and diabetics).\n\n

	The main screen of the system is a map that starts at the user's current location and searches for all available establishments within a 10 km radius, displaying their image and name with a marker on the map. When an establishment is clicked, its most important data, such as its address, email, telephone numbers, name, and all of its products, is loaded into a modal for the user to view.\n\n
	
	The application features a filter function that allows the user to filter products based on categories, ensuring that only suitable products are displayed. The filter is saved in local storage for easy access in the future.\n\n
	
	The project leverages advanced technologies such as React JS and Node.js to ensure good performance and a smooth user experience. Additionally, the use of TypeScript helps maintain code quality, making it easier to maintain and allowing for future development.`,
	images,
  skills,
};

export const ptPfcli = {
  title: "Pontos para Pessoas com Dietas Especiais",
  description: `Esta é uma aplicação web que fornece uma plataforma para registrar estabelecimentos e seus dados, incluindo suas coordenadas geográficas através de um mapa e também os seus produtos, que são relacionados a diferentes categorias para pessoas com intolerância alimentar (como celíacos, intolerantes à lactose e diabéticos).\n\n

	A tela principal do sistema é um mapa que começa na localização atual do usuário e procura por todos os estabelecimentos disponíveis dentro de um raio de 10 km, exibindo sua imagem e nome com um marcador no mapa. Quando um estabelecimento é clicado, seus dados mais importantes, como endereço, e-mail, números de telefone, nome e todos os seus produtos, são carregados em um modal para que o usuário possa visualizá-los.\n\n
	
	A aplicação possui uma função de filtro que permite ao usuário filtrar produtos com base nas categorias, garantindo que apenas produtos adequados sejam exibidos. O filtro é salvo no armazenamento local para manter a preferência do usuário pro futuro.\n\n
	
	O projeto aproveita tecnologias avançadas, como React JS e Node.js, para garantir uma boa performance e uma experiência de usuário suave. Além disso, o uso do TypeScript ajuda a manter a qualidade do código, tornando mais fácil de manter e permitindo futuros desenvolvimentos.`,
	images,
  skills,
}