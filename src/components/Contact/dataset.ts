import { FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { SlSocialLinkedin } from 'react-icons/sl';

const socialmedia = [
  {
    href: 'https://www.linkedin.com/in/eduardo-fertig-bastos/',
    icon: SlSocialLinkedin,
    label: 'LinkedIn',
    subtitle: 'www.linkedin.com/in/eduardo-fertig-bastos',
  },
  {
    href: 'https://github.com/EduardoFertigBastos',
    icon: FiGithub,
    label: 'Github',
    subtitle: 'EduardoFertigBastos',
  },
  {
    href: 'mailto:dudufbastos1@gmail.com',
    icon: HiOutlineMail,
    label: 'Email',
    subtitle: 'dudufbastos1@gmail.com',
  },
];

const dataset = {
  en: {
    title: 'Contact',
    subtitle: 'Get in touch',
    address: {
      label: 'Location',
      location: 'Rio do Sul, SC, Brazil',
    },
    form: {
      label: 'Send me a message',
      name: 'Name',
      project: 'Project',
      email: 'Email',
      message: 'Message',
      button: 'Send Message',
    },
    socialmedia,
  },
  pt: {
    title: 'Contato',
    subtitle: 'Entre em contato',
    address: {
      label: 'Localização',
      location: 'Rio do Sul, SC, Brazil',
    },
    form: {
      label: 'Me envie uma mensagem',
      name: 'Nome',
      project: 'Projeto',
      email: 'Email',
      message: 'Mensagem',
      button: 'Enviar Mensagem',
    },
    socialmedia,
  },

}

export default dataset;