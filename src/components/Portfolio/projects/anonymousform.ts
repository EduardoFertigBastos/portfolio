
import p6 from "../../../assets/projects/anonymous_form/add-question.webp";
import p5 from "../../../assets/projects/anonymous_form/chart-application.webp";
import p4 from "../../../assets/projects/anonymous_form/chart-by-form.webp";
import p1 from "../../../assets/projects/anonymous_form/dashboard.webp";
import p12 from "../../../assets/projects/anonymous_form/delete.webp";
import p7 from "../../../assets/projects/anonymous_form/duplicate-1.webp";
import p8 from "../../../assets/projects/anonymous_form/duplicate-2.webp";
import p9 from "../../../assets/projects/anonymous_form/list.webp";
import p13 from "../../../assets/projects/anonymous_form/login.webp";
import p10 from "../../../assets/projects/anonymous_form/multiple-select.webp";
import p11 from "../../../assets/projects/anonymous_form/see-members.webp";
import p3 from "../../../assets/projects/anonymous_form/send-application.webp";
import p2 from "../../../assets/projects/anonymous_form/test.webp";
import {
	css,
	docker,
	html,
	javascript,
	materialui,
	next,
	node,
	postgresql,
	react,
	styledComponents,
	typescript,
} from "../skills";

const skills = [
	node,
	next,
	react,
	typescript,
	javascript,
	html,
	css,
	styledComponents,
	materialui,
	postgresql,
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
	p12,
	p13,
];

export const enFormAnonymous = {
	id: 'anonymousform',
  title: "Anonymous Internal Assessment System",
  description: `This project was developed with the aim of serving as an internal evaluation system within the institution, allowing for anonymous responses. The process begins with the creation of a form containing various registered questions. Subsequently, multiple applications can be created with specific dates for members to respond. These applications can be directed to various groups of members.\n\n

	To facilitate member participation, an email containing the form link is sent to all eligible recipients. Upon completing the form, the responses are recorded, and a hash is generated to indicate that the respective member has already completed the questionnaire, preventing multiple responses from the same individual and ensuring anonymity.\n\n
	
	The system also provides a dashboard that includes a calendar, allowing for the visualization of all scheduled applications. Additionally, graphs detailing responses to questions are presented, either by application or by form.\n\n
	
	Regarding the architecture, the application was built using Next.js for the front-end, leveraging the componentization provided by React and the Server-Side Render offered by Next. The backend was developed in Node.js, supported by Next.js. The ORM used was Prisma, and for data validations, Zod was implemented.`,
	images,
  skills,
};

export const ptFormAnonymous = {
	id: 'anonymousform',
  title: "Sistema de Avaliação Interna de Forma Anônima",
  description: `Este projeto foi desenvolvido com o objetivo de servir como um sistema interno de avaliação na instituição, permitindo respostas anônimas. O processo inicia com a criação de um formulário contendo diversas questões cadastradas. Em seguida, podem-se ser criados diversas aplicações com datas específicas para que os membros possam respondê-lo. Essa aplicação pode ser direcionada a diversos grupos de membros.\n\n
	
	Para facilitar a participação dos membros, um e-mail contendo o link do formulário é enviado a todos os destinatários elegíveis. Ao responder o formulário, as respostas são registradas, e um hash é gerado para indicar que o respectivo membro já completou o questionário, evitando respostas múltiplas do mesmo indivíduo e de forma anônima.\n\n
	
	O sistema também oferece um dashboard que inclui um calendário, permitindo visualizar todas as aplicações programadas. Além disso, são apresentados gráficos que detalham as respostas das questões visualizadas ou por aplicação ou por formulário.\n\n
	
	Quanto à arquitetura, a aplicação foi construída utilizando Next.js para o front-end, aproveitando a componentização fornecida pelo React e o Server Side Render oferecido pelo Next. O backend foi desenvolvido em Node.js, que é suportado pelo Next.js. O ORM utilizado foi o Prisma, e para validações de dados foi implementado Zod.`,
	images,
  skills,
}