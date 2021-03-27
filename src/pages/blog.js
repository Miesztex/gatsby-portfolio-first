import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Blogs from '../components/Blogs';

const Blog = ({ data }) => {
	const {
		allStrapiBlogs: { nodes: blogs },
	} = data;
	return (
		<Layout>
			<section className='blog-page'>
				{/* all blogs with no link */}
				<Blogs blogs={blogs} title='blog' />
			</section>
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiBlogs(sort: { fields: date, order: DESC }) {
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

export default Blog;
