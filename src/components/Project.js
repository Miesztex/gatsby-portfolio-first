import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
const Project = props => {
	const {
		idx,
		description,
		title,
		github,
		stack,
		image: {
			childImageSharp: { fluid },
		},
	} = props;

	return (
		<article className='project'>
			<Image fluid={fluid} className='project-img' />
			<div className='project-info'>
				<span className='project-number'>{` ${idx < 9 && 0}${idx + 1}`}</span>
				<h3>{title}</h3>
				<p className='project-desc'>{description}</p>
				<div className='project-stack'>
					{stack.map(item => (
						<span key={item.id}>{item.title}</span>
					))}
				</div>
				<div className='project-links'>
					<a href={github}>
						<FaGithubSquare className='project-icon' />
					</a>
				</div>
			</div>
		</article>
	);
};

Project.propTypes = {};

export default Project;
