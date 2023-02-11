import photo from 'assets/me/normal.png';

const dataset = {
  en: {
    title: 'About Me',
    subtitle: 'A brief introduction',
    img: 'assets/img/about.jpg',
    description: `Hello, I am Eduardo Fertig Bastos and I am a Full-Stack Developer. `
          + `I have 4 years of experience. I graduated from the UNIDAVI information systems `
          + `course, which I iniatialize on 2019 and finished in 2022. To work with back-end `
          + `I am more familiarized with Node.js, Laravel and PHP vanilla. To work with front-end `
          + `I am more familiarized with React JS, JavaScript vanilla and JQuery. On databases `
          + `I worked with PostgreSQL, MySQL, SQLite, SQL Server and MongoDB. `,
    description2: 'If you want to know more about me, feel free to contact me.',
    info: [
      {
        title: '04+',
        name1: 'Years',
        name2: 'experience',
      },
      {
        title: '8',
        name1: 'Completed',
        name2: 'project',
      },
      {
        title: '03',
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
    description: `Olá, eu sou Eduardo Fertig Bastos e sou um Desenvolvedor Full-Stack. `
      + `Tenho 4 anos de experiência e sou formado pela UNIDAVI sistemas de informação, `
      + `curso esse que iniciei em 2019 e finalizei em 2022. Para trabalhar com back-end `
      + `estou mais familiarizado com Node.js, Laravel e PHP vanilla. E como ferramentas `
      + `para utilizar no front-end eu prefiro React JS, porém também utilizo e tenho `
      + `experiência com  JavaScript vanilla e JQuery. Em relação a banco dados, utilizo `
      + `principalmente PostgreSQL, porém também tenho experiência com MySQL, SQLite, SQL Server e MongoDB.`,
    description2: 'Caso queira saber mais sobre mim, sinta-se livre para entrar em contato.',
    info: [
      {
        title: '04+',
        name1: 'Anos',
        name2: 'de experiência',
      },
      {
        title: '8',
        name1: 'Projetos',
        name2: 'completos',
      },
      {
        title: '03',
        name1: 'Empresas',
        name2: 'trabalhadas',
      },
    ],
    photo
  }
}

export default dataset;