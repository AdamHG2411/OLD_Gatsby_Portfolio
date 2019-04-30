import React from 'react';
import './footer.css';

const Footer = () => (
	<footer>
		<p>
			© {new Date().getFullYear()} Adam Grider, Built with
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
		</p>
	</footer>
);

export default Footer;
