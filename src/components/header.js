import { Link } from 'gatsby';
import React from 'react';
import './header.css';

const Header = () => (
	<header>
		<div>
			<Link to="/">
				<div className="logoImage" />
			</Link>
			<nav>
				<Link to="/about">About</Link>
				<Link to="/portfolio">Portfolio</Link>
				<Link to="/links">Links</Link>
			</nav>
		</div>
	</header>
);

export default Header;
