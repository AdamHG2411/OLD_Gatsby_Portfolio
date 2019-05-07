import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ahgPhoto from '../images/adam.jpg';
import './index.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `Adam Grider`, `development`, `software` ]} />
		<div className="Home">
			<h1>Welcome! I'm Adam Grider</h1>
			<div className="Home-Body">
				<p>
					<strong>
						With a foundation of open communication, creative thinking, and the relentless pursuit of new
						skills, I develop polished apps and websites tailored to meet your needs and achieve your
						desired impacts.
					</strong>
				</p>
				<p>
					If you have an idea for an app or website, please contact me and I’ll be happy to provide a free
					quote and/or consultation.
				</p>
				<p>
					I’m also seeking a full-time position as a software engineer beginning in mid-June 2019. I’m
					currently based in Washington, DC, but I’m open to remote work or relocation for the right
					opportunity.
				</p>
			</div>
			<img className="Home-Photo" src={ahgPhoto} alt="Adam Grider" />
		</div>
	</Layout>
);

export default IndexPage;
