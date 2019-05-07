import React, { Component } from 'react';
import minesweeper from '../images/minesweeper.png';
import musicalsAPI from '../images/musicals-api.png';
import DCMusicals from '../images/dc-musicals.png';
import './Project.css';

class Project extends Component {
	render() {
		let projects = [
			{
				title: 'Musicals API',
				description:
					"My second project for General Assembly's Software Engineering Immersive was to build a database and API with multiple related collections. As a big fan of musicals, I decided I wanted to create a database for upcoming performances in DC.",
				repo: 'https://www.github.com/adamhg2411/musicals-api',
				deployed: 'https://musicals-api.herokuapp.com/api/performances',
				tech: [ 'MongoDB', 'Mongoose', 'Atlas', 'Node.js', 'Express', 'Heroku' ]
			},
			{
				title: 'DC Musicals',
				description:
					'Built to accompany my Musicals API, I taught myself React during our second project week to build a user interface that would dynamically populate with the content from my database. With time, I plan to build this out further and refine the design.',
				repo: 'https://www.github.com/adamhg2411/dc-musicals',
				deployed: 'https://adamhg2411.github.io/dc-musicals',
				tech: [ 'React', 'JavaScript', 'CSS' ]
			},
			{
				title: 'Minesweeper',
				description:
					"This Minesweeper clone, built from scratch with Vanilla JavaScript was my first project for General Assembly's Software Engineering Immersive. I went beyond the suggested projects as a challenge to myself. Going back now, I would make the code more object-oriented and likely develop it with React.",
				repo: 'https://www.github.com/adamhg2411/minesweeper-ag',
				deployed: 'https://adamhg2411.github.io/minesweeper-ag',
				tech: [ 'Pug', 'Sass', 'JavaScript', 'Parcel' ]
			}
		];
		// let projectList = projects.map((project) => {
		// 	return (
		// 		<div className="Project">
		// 			<h2 className="Project__Title">{project.title}</h2>
		// 			<a className="Project__Link" href={`${project.deployed}`}>
		// 				Link
		// 			</a>
		// 			<p className="Project__Description">{project.description}</p>
		// 			<img className="Project__Image" src={`${ahgPhoto}`} />
		// 			<p className="Project__Tech">{project.tech.join('  ')}</p>
		// 		</div>
		// 	);
		// });
		return (
			<div>
				<h1 className="Page-Header">Portfolio</h1>
				<div className="Project">
					<h2 className="Project__Title">{projects[0].title}</h2>
					<p className="Project__Links">
						<a href={`${projects[0].deployed}`}>Deployed</a> | <a href={`${projects[0].repo}`}>Repo</a>
					</p>
					<p className="Project__Description">{projects[0].description}</p>
					<img className="Project__Image" src={`${musicalsAPI}`} alt={`${projects[0].title}`} />
					<p className="Project__Tech">{projects[0].tech.join(' | ')}</p>
				</div>
				<div className="Project">
					<h2 className="Project__Title">{projects[1].title}</h2>
					<p className="Project__Links">
						<a href={`${projects[1].deployed}`}>Deployed</a> | <a href={`${projects[1].repo}`}>Repo</a>
					</p>
					<p className="Project__Description">{projects[1].description}</p>
					<img className="Project__Image" src={`${DCMusicals}`} alt={`${projects[1].title}`} />
					<p className="Project__Tech">{projects[1].tech.join(' | ')}</p>
				</div>
				<div className="Project">
					<h2 className="Project__Title">{projects[2].title}</h2>
					<p className="Project__Links">
						<a href={`${projects[2].deployed}`}>Deployed</a> | <a href={`${projects[2].repo}`}>Repo</a>
					</p>
					<p className="Project__Description">{projects[2].description}</p>
					<img className="Project__Image" src={`${minesweeper}`} alt={`${projects[2].title}`} />
					<p className="Project__Tech">{projects[2].tech.join(' | ')}</p>
				</div>
			</div>
		);
		// <div className="Project">
		// 	<h2 className="Project__Title">This is a project</h2>
		// 	<a className="Project__Link" href="https://adamhg2411.github.io">
		// 		Link
		// 	</a>
		// 	<p className="Project__Description">
		// 		My project description goes here. This is where I'll add a small- to medium-sized paragraph
		// 		explaining the project. At this point, I'm mostly just writing to fill up text. Ok, I think that
		// 		should be enough.
		// 	</p>
		// 	<img className="Project__Image" src={ahgPhoto} alt="description" />
		// 	<div className="Project__Icons">
		// 		<div>
		// 			<a href="https://github.com/AdamHG2411">
		// 				<i className="icon devicon-github-plain colored" />
		// 				<p>GitHub</p>
		// 			</a>
		// 		</div>
		// 		<div>
		// 			<i className="icon devicon-html5-plain-wordmark colored" />
		// 			<p>HTML</p>
		// 		</div>
		// 		<div>
		// 			<i className="icon devicon-css3-plain-wordmark colored" alt="CSS 3" />
		// 			<p>CSS</p>
		// 		</div>
		// 		<div>
		// 			<i className="icon devicon-sass-original colored" alt="Sass" />
		// 			<p>Sass</p>
		// 		</div>
		// 		<div>
		// 			<i className="icon devicon-javascript-plain colored" alt="JavaScript" />
		// 			<p>JavaScript</p>
		// 		</div>
		// 	</div>
		// </div>
	}
}

export default Project;
