
import s1 from "../../../assets/projects/gobarber/1.png";
import s2 from "../../../assets/projects/gobarber/2.png";
import s3 from "../../../assets/projects/gobarber/3.png";
import s4 from "../../../assets/projects/gobarber/4.png";
import s5 from "../../../assets/projects/gobarber/5.png";
import s6 from "../../../assets/projects/gobarber/6.png";
import s7 from "../../../assets/projects/gobarber/7.png";
import {
	aws,
	css,
	docker,
	html,
	javascript,
	node,
	postgresql,
	react,
	reactNative,
	styledComponents,
	typescript,
} from "../skills";

const skills = [
	react,
	node,
	typescript,
	javascript,
	reactNative,
	postgresql,
	docker,
	aws,
	css,
	styledComponents,
	html,
];

const images = [
  s1,
	s2,
	s3,
	s4,
	s5,
	s6,
	s7
];

export const enGobarber = {
	id: 'gobarber',
  title: "GoBarber",
  description: `GoBarber is a comprehensive scheduling application for barbershops and beauty salons, featuring an impressive software architecture.

	The Node.js REST API serves as the application's backend, responsible for managing all business logic. It executes all CRUD operations, data persistence, and exception handling, serving data to both the front-end and mobile. Furthermore, it offers high availability and scalability, ensuring the application can handle a large volume of data and users.\n\n
	
	The front-end of the application is a ReactJS application that allows service providers to view their appointment calendar and manage their availability. With an intuitive and highly responsive user interface, the ReactJS application offers a fluid and user-friendly experience.\n\n
	
	The React Native mobile application provides users with a seamless experience, with easy access to all service providers registered on the platform. With an attractive and highly interactive user interface, the mobile application offers a rich and engaging user experience.\n\n
	
	In summary, GoBarber is a technically and architecturally impressive application that utilizes the latest technologies to offer a comprehensive scheduling platform for barbershops and beauty salons. With a powerful Node.js REST API and a highly responsive ReactJS front-end, combined with cutting-edge mobile application in React Native, GoBarber is an application that represents the best of cutting-edge technology.`,
	images,
  skills,
};

export const ptGobarber = {
	id: 'gobarber',
  title: "GoBarber",
  description: `O GoBarber é uma aplicação completa de agendamento de serviços para barbearias e salões de beleza, que apresenta uma impressionante arquitetura de software.\n\n

	A API REST em Node.js funciona como o back-end da aplicação, e é responsável pelo gerenciamento de toda a lógica de negócios. Ela executa todas as operações de CRUD, persistência de dados e tratamento de exceções da aplicação, e serve dados tanto para o front-end quanto para o mobile. Além disso, ela oferece uma alta disponibilidade e escalabilidade, garantindo que a aplicação possa lidar com um grande volume de dados e usuários.\n\n
	
	O front-end da aplicação é uma aplicação em ReactJS que permite que os prestadores de serviços visualizem seu calendário de agendamentos e gerenciem suas disponibilidades. Com uma interface de usuário intuitiva e altamente responsiva, a aplicação ReactJS oferece uma experiência de usuário fluida e fácil de usar.\n\n
	
	O aplicativo móvel em React Native oferece aos usuários uma experiência perfeita, com acesso fácil a todos os prestadores de serviços cadastrados na plataforma. Com uma interface de usuário atraente e altamente interativa, o aplicativo móvel oferece uma experiência de usuário rica e envolvente.\n\n
	
	Em resumo, o GoBarber é uma aplicação técnica e arquitetonicamente impressionante que utiliza as mais recentes tecnologias para oferecer uma plataforma completa de agendamento de serviços para barbearias e salões de beleza. Com uma API REST poderosa em Node.js e um front-end altamente responsivo em ReactJS, combinados com um aplicativo móvel de ponta em React Native, o GoBarber é uma aplicação que representa o melhor da tecnologia de ponta.`,
	images,
  skills,
}