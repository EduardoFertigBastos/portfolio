
import c1 from "../../../assets/projects/clinica/1.webp";
import c2 from "../../../assets/projects/clinica/2.webp";
import c3 from "../../../assets/projects/clinica/3.webp";
import c4 from "../../../assets/projects/clinica/4.webp";
import c5 from "../../../assets/projects/clinica/5.webp";
import c6 from "../../../assets/projects/clinica/6.webp";
import c7 from "../../../assets/projects/clinica/7.webp";
import c8 from "../../../assets/projects/clinica/8.webp";
import {
	bootstrap,
	css,
	docker,
	html,
	javascript,
	jquery,
	laravel,
	php,
	postgresql,
} from "../skills";

const skills = [
	laravel,
	php,
	javascript,
	jquery,
	docker,
	html,
	css,
	bootstrap,
	postgresql
];

const images = [
	c1,
	c2,
	c3,
	c4,
	c5,
	c6,
	c7,
	c8
];

export const enClinica = {
	id: 'clinica',
  title: "Psychologist Clinic Management",
  description: `This psychology appointment management website is an advanced platform built with the technologies Laravel, PHP, JavaScript, jQuery, CSS, Bootstrap, HTML and PostgreSQL. With a responsive and intuitive interface, the application provides mental health professionals with an efficient solution for managing clients and appointments.\n\n

	The appointment scheduling functionality allows the psychologist to register new clients and schedule appointments through a user-friendly modal. Appointment viewing is available by month, week, and day, allowing the psychologist to quickly view their schedule.\n\n
	
	The dashboard displays important statistical information, including the percentage of male, female, and other patients, number of appointments by month, week, and day, number of registered users, and a history of the last few months. Additionally, the application also allows for the registration of diagnoses and the creation of a detailed report about the client's file.`,
	images,
  skills,
};

export const ptClinica = {
	id: 'clinica',
  title: "Gerenciamento de Clínica de Psicologia",
  description: `Este site de gerenciamento de consultas psicológicas é uma plataforma avançada construída com as tecnologias Laravel, PHP, JavaScript, jQuery, CSS, Bootstrap, HTML e PostgreSQL. Com uma interface responsiva e intuitiva, a aplicação oferece aos profissionais de saúde mental uma solução eficiente para o gerenciamento de clientes e consultas. \n\n

	A funcionalidade de agendamento permite à psicóloga cadastrar novos clientes e marcar consultas através de um modal fácil de usar. A visualização de horários de atendimento está disponível por mês, semana e dia, permitindo que a psicóloga visualize rapidamente sua agenda.\n\n
	
	O dashboard apresenta informações estatísticas importantes, incluindo a porcentagem de pacientes do sexo masculino, feminino e outros, quantidade de consultas por mês, semana e dia, número de usuários cadastrados e um histórico dos últimos meses. Além disso, a aplicação também permite o cadastro de diagnósticos e a elaboração de um relatório detalhado sobre a ficha do cliente.`,
	images,
  skills,
}