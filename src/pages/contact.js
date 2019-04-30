import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={[ `Adam Grider`, `development`, `software` ]} />
		<h1>Get in Touch</h1>
		<p>
			If you have an app or website you need built, please reach out for a free consultation and quote through the
			form below. You can also message me on Twitter or LinkedIn.
		</p>
	</Layout>
);

export default ContactPage;
