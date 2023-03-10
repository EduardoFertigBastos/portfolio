
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
	aws,
	css,
	docker,
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
	docker,
	aws,
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
	id: 'pfcli',
  title: "Points for Special Diet People",
  description: `This is a web application that provides a platform for registering establishments and their associated data, including their geographic coordinates through a map, and their products related to different categories for people with food intolerances (such as celiacs, lactose intolerants, and diabetics).\n\n

	The main screen of the system is a map that starts at the user's current location and searches for all available establishments within a 10 km radius, displaying their image and name with a marker on the map. When an establishment is clicked, its most important data, such as its address, email, telephone numbers, name, and all of its products, is loaded into a modal for the user to view.\n\n
	
	The application features a filter function that allows the user to filter products based on categories, ensuring that only suitable products are displayed. The filter is saved in local storage for easy access in the future.\n\n
	
	The project leverages advanced technologies such as React JS and Node.js to ensure good performance and a smooth user experience. Additionally, the use of TypeScript helps maintain code quality, making it easier to maintain and allowing for future development.`,
	images,
  skills,
};

export const ptPfcli = {
	id: 'pfcli',
  title: "Pontos para Pessoas com Dietas Especiais",
  description: `Esta ?? uma aplica????o web que fornece uma plataforma para registrar estabelecimentos e seus dados, incluindo suas coordenadas geogr??ficas atrav??s de um mapa e tamb??m os seus produtos, que s??o relacionados a diferentes categorias para pessoas com intoler??ncia alimentar (como cel??acos, intolerantes ?? lactose e diab??ticos).\n\n

	A tela principal do sistema ?? um mapa que come??a na localiza????o atual do usu??rio e procura por todos os estabelecimentos dispon??veis dentro de um raio de 10 km, exibindo sua imagem e nome com um marcador no mapa. Quando um estabelecimento ?? clicado, seus dados mais importantes, como endere??o, e-mail, n??meros de telefone, nome e todos os seus produtos, s??o carregados em um modal para que o usu??rio possa visualiz??-los.\n\n
	
	A aplica????o possui uma fun????o de filtro que permite ao usu??rio filtrar produtos com base nas categorias, garantindo que apenas produtos adequados sejam exibidos. O filtro ?? salvo no armazenamento local para manter a prefer??ncia do usu??rio pro futuro.\n\n
	
	O projeto aproveita tecnologias avan??adas, como React JS e Node.js, para garantir uma boa performance e uma experi??ncia de usu??rio suave. Al??m disso, o uso do TypeScript ajuda a manter a qualidade do c??digo, tornando mais f??cil de manter e permitindo futuros desenvolvimentos.`,
	images,
  skills,
}