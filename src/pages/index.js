import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import './index.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `Adam Grider`, `development`, `software` ]} />
		<div className="content">
			<h1>Welcome! I'm Adam Grider</h1>
			<div className="bodyText">
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
			<div className="profilePhoto" />
		</div>
	</Layout>
);

export default IndexPage;
