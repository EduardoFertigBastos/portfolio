import photo from 'assets/me/oculosescuro.png';

const socialmedia = [
  {
    href: 'https://www.linkedin.com/in/eduardo-fertig-bastos/',
    icon: 'uil uil-linkedin-alt',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/EduardoFertigBastos',
    icon: 'uil uil-github-alt',
    label: 'Github',
  }
];

const dataset = {
  en: {
    title: `Hi, I'm Eduardo`,
    subtitle: `I'm a Full Stack Developer`,
    description: ` I'm a 21 years old developer and eternally a passioned student. `
      + `I currently live in Rio do Sul, Brazil. I am a calm and communicative person ` 
      + `who likes to work in a team and who always tries to solve problems, even if `
      + `they are extremely difficult. But I don't hesitate to ask for help when I know `
      + `it's beyond my current knowledge. However shortly thereafter, I will take time `
      + `out of my days and study the matter until I am fully aware of what it is, `
      + `why it happened and how it should be resolved.
    `,
    contact: 'Contact me',
    scroll: 'Scroll down',
    profilePhoto: photo,
    socialmedia
  },
  pt: {
    title: `Prazer, Eduardo`,
    subtitle: `Desenvolvedor Full Stack`,
    description: `Sou um desenvolvedor de 21 anos e eternamente um estudante apaixonado. Atualmente, moro em Rio do Sul, Brasil. Sou uma pessoa calma e comunicativa, que gosta de trabalhar em equipe e sempre procura resolver os problemas, mesmo que sejam extremamente difíceis. No entanto, não hesito em pedir ajuda quando sei que está além do meu conhecimento atual. Logo em seguida, dedicarei um tempo para estudar o assunto até ter plena consciência do que é, por que aconteceu e como deve ser resolvido.`,
    contact: 'Entre em contato',
    scroll: 'Descer',
    profilePhoto: photo,
    socialmedia
  }
}

export default dataset;