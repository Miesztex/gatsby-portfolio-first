import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';

export default ({ data }) => {
	const {
		allStrapiProjects: { nodes: featuredProjects },
		allStrapiBlogs: { nodes: blogs },
	} = data;
	return (
		<Layout>
			<Hero />
			<Services />
			<Jobs />
			<Projects
				projects={featuredProjects}
				title='featured projects'
				showLink
			/>
			{/* 3 latest blogs with link */}
			<Blogs blogs={blogs} title='blog' showLink />
		</Layout>
	);
};

// projects info query
export const query = graphql`
	{
		allStrapiProjects(filter: { featured: { eq: true } }) {
			nodes {
				featured
				github
				description
				id
				title
				stack {
					id
					title
				}
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		allStrapiBlogs(filter: {}, sort: { fields: date, order: DESC }, limit: 3) {
			nodes {
				id
				description
				date(formatString: "MMMM Do, YYYY")
				content
				category
				slug
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
