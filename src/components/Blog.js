import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
const Blog = props => {
	const {
		id,
		title,
		date,
		category,
		description,
		slug,
		image: {
			childImageSharp: { fluid },
		},
	} = props;
	return (
		<Link to={`/blogs/${slug}`} key={id}>
			<Image fluid={fluid} className='blog-mg' />
			<div className='blog-cart'>
				<h4>{title}</h4>
				<p>{description}</p>
				<div className='blog-footer'>
					<p>{category}</p>
					<p>{date}</p>
				</div>
			</div>
		</Link>
	);
};

Blog.propTypes = {};

export default Blog;
