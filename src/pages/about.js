import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>About me</h1>
		<p>
			Thanks for your interest! This page is still a work in progress. I've added some information below, but I
			would recommend checking my <a href="https://www.linkedin.com/in/adam-h-grider">LinkedIn</a> for the most
			complete and up-to-date information on my past experience or my <Link to="/portfolio">portfolio page</Link>{' '}
			for my latest software engineering projects.
		</p>
		<div className="experience">
			<h5>
				Conservation International/<a href="https://www.dgmglobal.org">DGM Global</a>
			</h5>
			<p>2016-2019 - Monitoring, Reporting, and Communications Manager</p>
			<h5>IBI (2015 USAID Small Business of the Year)</h5>
			<p>2016 - Project Manager</p>
			<p>2014-2015 - Project Management Associate</p>
			<p>2013 - Operations Intern</p>
		</div>
		<div className="education">
			<h5>General Assembly</h5>
			<p>2019 - Software Engineering Immersive</p>
			<p>2018 - Adobe Creative Suite Crash Course</p>
			<h5>George Washington University</h5>
			<p>2015 - M.A., European and Eurasian Studies</p>
			<p>Specialization: Environmental/Energy Policy</p>
			<h5>University of Tulsa</h5>
			<p>2013 - B.A., Classics/Political Science</p>
		</div>
	</Layout>
);

export default SecondPage;
