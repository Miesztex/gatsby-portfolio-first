import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Image from 'gatsby-image';
const About = ({ data }) => {
	const {
		title,
		stack,
		description,
		image: {
			childImageSharp: { fluid },
		},
	} = data.about.nodes[0];

	return (
		<Layout>
			<section className='about-page'>
				<div className='section-center about-center'>
					<Image fluid={fluid} className='about-img' />
					<article className='about-text'>
						<Title title={title} />
						<p>{description}</p>
						<div className='about-stack'>
							{stack.map(item => (
								<span key={item.id}>{item.title}</span>
							))}
						</div>
					</article>
				</div>
			</section>
		</Layout>
	);
};

// about section query
export const query = graphql`
	{
		about: allStrapiAbout {
			nodes {
				stack {
					id
					title
				}
				title
				description
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
export default About;
