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
		allStrapiProjects: { nodes: projects },
	} = data;
	return (
		<Layout>
			<Hero />
			<Services />
			<Jobs />
			<Projects projects={projects} title='featured projects' showLink />
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
							src
						}
					}
				}
			}
		}
	}
`;
// ...GatsbyImageSharpFluid