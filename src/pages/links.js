import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './links.css';

const LinksPage = () => (
	<Layout>
		<SEO title="Links" keywords={[ `Adam Grider`, `development`, `software` ]} />
		<div>
			<h1>Links</h1>
			<p>Connect with me online:</p>
			<p>
				<a href="https://twitter.com/ahgrider">Twitter</a>
			</p>
			<p>
				<a href="https://www.linkedin.com/in/adam-h-grider">LinkedIn</a>
			</p>
			<p>
				<a href="https://www.githum.com/adamhg2411">GitHub</a>
			</p>
		</div>
	</Layout>
);

export default LinksPage;
