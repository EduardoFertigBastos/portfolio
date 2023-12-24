import photo from 'assets/me/normal.webp';

const dataset = {
  en: {
    title: 'About Me',
    subtitle: 'A brief introduction',
    img: 'assets/img/about.jpg',
    description: `Hello, I am Eduardo Fertig Bastos and I am a Full-Stack Developer. `
          + `I have 5 years of experience. I graduated from the UNIDAVI information systems `
          + `course, which I iniatialize on 2019 and finished in 2022.  `
          + `To work with back-endI am more familiarized with Node.js, Laravel and PHP vanilla. `
          + `To work with front-end I am more familiarized with React JS, JavaScript vanilla and JQuery. `
          + `On databases I worked with PostgreSQL, MySQL, SQLite, SQL Server and MongoDB. `,
    description2: 'If you want to know more about me, feel free to contact me.',
    info: [
      {
        title: '05+',
        name1: 'Years',
        name2: 'experience',
      },
      {
        title: '9',
        name1: 'Completed',
        name2: 'project',
      },
      {
        title: '04',
        name1: 'Companies',
        name2: 'worked',
      },
    ],
    photo
  },
  pt: {
    title: 'Sobre mim',
    subtitle: 'Uma breve introdução',
    img: 'assets/img/about.jpg',
    description: `Olá, eu sou Eduardo Fertig Bastos e sou um desenvolvedor Full-Stack. Tenho 5 anos de experiência e sou formado em Sistemas de Informação pela UNIDAVI, curso que iniciei em 2019 e finalizei em 2022. Para trabalhar com back-end, estou mais familiarizado com Node.js, Laravel e PHP vanilla. Em relação às ferramentas para o front-end, prefiro utilizar React JS, porém também tenho experiência com JavaScript vanilla e JQuery. No que se refere a bancos de dados, tenho utilizado principalmente PostgreSQL, mas também possuo experiência com MySQL, SQLite, SQL Server e MongoDB.`,
    description2: 'Caso queira saber mais sobre mim, sinta-se livre para entrar em contato.',
    info: [
      {
        title: '05+',
        name1: 'Anos',
        name2: 'de experiência',
      },
      {
        title: '9',
        name1: 'Projetos',
        name2: 'completos',
      },
      {
        title: '04',
        name1: 'Empresas',
        name2: 'trabalhadas',
      },
    ],
    photo
  }
}

export default dataset;