import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Projects from '../components/Projects';
// ...GatsbyImageSharpFluid

const ProjectsPage = ({ data }) => {
	const {
		allStrapiProjects: { nodes: projects },
	} = data;
	return (
		<Layout>
			<section className='projects'>
				<Projects projects={projects} title='all projects' />
			</section>
		</Layout>
	);
};

// all projects info query
export const query = graphql`
	{
		allStrapiProjects {
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

export default ProjectsPage;
