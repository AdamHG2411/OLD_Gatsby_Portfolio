import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project.js';

// let projects = [
// 	{
// 		title: 'Musicals API',
// 		description:
// 			"My second project for General Assembly's Software Engineering Immersive was to build a database and API with multiple related collections. As a big fan of musicals, I decided I wanted to create a database for upcoming performances in DC.",
// 		repo: 'https://www.github.com/adamhg2411/musicals-api',
// 		deployed: 'https://musicals-api.herokuapp.com/api/performances',
// 		tech: [ 'MongoDB', 'Mongoose', 'Atlas', 'Node.js', 'Express', 'Heroku' ]
// 	},
// 	{
// 		title: 'DC Musicals',
// 		description:
// 			'Built to accompany my Musicals API, I taught myself React during our second project week to build a user interface that would dynamically populate with the content from my database. With time, I plan to build this out further and refine the design.',
// 		repo: 'https://www.github.com/adamhg2411/dc-musicals',
// 		deployed: 'https://adamhg2411.github.io/dc-musicals',
// 		tech: [ 'React', 'JavaScript', 'CSS' ]
// 	},
// 	{
// 		title: 'Minesweeper',
// 		description:
// 			"This Minesweeper clone, built from scratch with Vanilla JavaScript was my first project for General Assembly's Software Engineering Immersive. I went beyond the suggested projects as a challenge to myself. Going back now, I would make the code more object-oriented and likely develop it with React.",
// 		repo: 'https://www.github.com/adamhg2411/minesweeper-ag',
// 		deployed: 'https://adamhg2411.github.io/minesweeper-ag',
// 		tech: [ 'Pug', 'Sass', 'JavaScript', 'Parcel' ]
// 	}
// ];

const PortfolioPage = () => (
	<Layout>
		<SEO title="Portfolio" keywords={[ `Adam Grider`, `development`, `software` ]} />
		<Project />
	</Layout>
);

export default PortfolioPage;
