import React from "react";

import './style.css';
import About from "components/About";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "components/Home";
import Portfolio from "components/Portfolio";
import Skills from "components/Skills";

import { useLanguage } from "hooks/language";


const HomePage = () => {
	const { language } = useLanguage();
	document.documentElement.lang = language;
	
	return (
		<>
			<Header></Header>

			<main className="main">
				<Home></Home>
				<About></About>

				<Portfolio></Portfolio>
			
				<Skills></Skills>
				<Contact></Contact>
			</main>

			<Footer></Footer>
		</>
	);
};

export default HomePage;
