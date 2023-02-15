
import s1 from "../../../assets/projects/spotify_city/coordinates.webp";
import s2 from "../../../assets/projects/spotify_city/list.webp";
import {
	css,
	html,
	javascript,
	node,
	react,
	styledComponents,
	typescript,
} from "../skills";

const skills = [
	react,
	node,
	typescript,
	javascript,
	css,
	styledComponents,
	html,
];

const images = [
  s1, 
	s2
];

export const enSpotifyCity = {
  title: "Playlist based on City's temperature",
  description: `This project is a web application that provides weather information and music based on the desired city's temperature. It features a backend developed with Node.js and TypeScript, which has integrations with the OpenWeatherMap and Spotify APIs to get the city's temperature and create a playlist, respectively.\n\n

	The project's front-end was created using React JS and TypeScript and offers two ways of sending data - typing the city name or providing the location. After sending the information, a list of the songs on the playlist related to the city's temperature is displayed on the screen. \n\n
	
	This application uses advanced technologies, such as Node.js and React JS, to ensure good performance and a pleasant user experience. In addition, the use of TypeScript helps maintain code quality, making maintenance easier and allowing for future developments.`,
	images,
  skills,
};

export const ptSpotifyCity = {
  title: "Playlist baseada na temperatura da cidade",
  description: `Este projeto é uma aplicação web que fornece informações climáticas e música baseada na temperatura da cidade desejada. Ele conta com um backend desenvolvido com Node.js e TypeScript, que possui integrações com as APIs do OpenWeatherMap e do Spotify para obter a temperatura da cidade e criar uma playlist, respectivamente. \n\n

	O front-end do projeto foi criado utilizando React JS e TypeScript e oferece duas formas de enviar os dados - digitando o nome da cidade ou informando a geolocalização. Após enviar as informações, uma lista das músicas na playlist relacionada à temperatura da cidade é exibida na tela.\n\n
	
	Esta aplicação utiliza tecnologias avançadas, como Node.js e React JS, para garantir uma boa performance e uma experiência de usuário agradável. Além disso, o uso de TypeScript ajuda a manter a qualidade do código, facilitando a manutenção e permitindo futuros desenvolvimentos.`,
	images,
  skills,
}