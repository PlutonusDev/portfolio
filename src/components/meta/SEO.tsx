import React from "react";
import Head from "next/head";

const SEO: React.FC<SEOProps> = ({ description = "Hey there! I'm Josh, a software engineer who loves all things tech and aviation, originally from Cairns, Australia and currently in Rennes, Bretagne. This is my portfolio.", keywords = ["portfolio", "developer", "software", "engineer", "devops"], title, site_name, site_url = "https://plutonus.dev/", twitter_handle }) => (
	<Head>
		<title>Joshua Hughes - Portfolio</title>
		<link rel="icon" href="/favicon.ico" />
		<meta name="description" content={description} />
		<meta name="keywords" content={keywords?.join(", ")} />
		<meta name="theme-color" content="#3b82f6" />

		<meta property="og:type" content="website" />
		<meta property="og:title" content={`Joshua Hughes - Portfolio`} />
		<meta property="og:description" content={description} />
		<meta property="og:site_name" content={site_name} />
		<meta property="og:url" content={site_url} />
		<meta property="og:image" content="/placeholder.png" />

		{/*<meta name="twitter:card" content="summary_large_image" />*/}
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:site" content={site_url} />
		{/*<meta name="twitter:creator" content={twitter_handle} />*/}
		<meta name="twitter:image" content="/placeholder.png" />
	</Head>
);

export interface SEOProps {
	description?: string;
	lang?: string;
	meta?: any[];
	keywords?: string[];
	title?: string;
	site_name?: string;
	site_url?: string;
	twitter_handle?: string;
}

export default SEO;