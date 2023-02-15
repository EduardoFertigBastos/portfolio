import { BiFile, BiHomeAlt, BiUser } from "react-icons/bi";
import { GrContactInfo } from "react-icons/gr";
import { MdOutlineFilterFrames } from "react-icons/md";

const dataset = {
  en: [
    {
      href: '#home',
      icon: BiHomeAlt,
      text: 'Home',
    },
    {
      href: '#about',
      icon: BiUser,
      text: 'About',
    },
    {
      href: '#portfolio',
      icon: MdOutlineFilterFrames,
      text: 'Portfolio',
    },
    {
      href: '#skills',
      icon: BiFile,
      text: 'Skills',
    },
    {
      href: '#contact',
      icon: GrContactInfo,
      text: 'Contact',
    }
  ],
  pt: [
    {
      href: '#home',
      icon: BiHomeAlt,
      text: 'Home',
    },
    {
      href: '#about',
      icon: BiUser,
      text: 'Sobre',
    },
    {
      href: '#portfolio',
      icon: MdOutlineFilterFrames,
      text: 'Portfólio',
    },
    {
      href: '#skills',
      icon: BiFile,
      text: 'Habilidades',
    },
    {
      href: '#contact',
      icon: GrContactInfo,
      text: 'Contato',
    }
  ]
}

export default dataset;