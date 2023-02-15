import { BsGithub, BsLinkedin } from "react-icons/bs";

const socialmedia = [
  {
    href: 'https://www.linkedin.com/in/eduardo-fertig-bastos/',
    icon: BsLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/EduardoFertigBastos',
    icon: BsGithub,
    label: 'Github',
  }
];

const dataset = {
  en: {
    menu: [
      {
        href: '#home',
        text: 'Home',
      },
      {
        href: '#about',
        text: 'About',
      },
      {
        href: '#portfolio',
        text: 'Portfolio',
      },
      {
        href: '#skills',
        text: 'Skills',
      },
      {
        href: '#contact',
        text: 'Contact',
      }
    ],
    name: `Eduardo Fertig Bastos`,
    subtitle: `Full Stack Developer`,
    socialmedia
  },
  pt: {
    menu: [
      {
        href: '#home',
        text: 'Home',
      },
      {
        href: '#about',
        text: 'Sobre',
      },
      {
        href: '#portfolio',
        text: 'Portfólio',
      },
      {
        href: '#skills',
        text: 'Habilidades',
      },
      {
        href: '#contact',
        text: 'Contato',
      }
    ],
    
    name: `Eduardo Fertig Bastos`,
    subtitle: `Desenvolvedor Full Stack`,
    socialmedia
  }
}

export default dataset;