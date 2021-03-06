import React from 'react';
import Title from './Title';
import Project from './Project';
import { Link } from 'gatsby';
const Projects = ({ projects, title, showLink }) => {
	return (
		<section className='section projects'>
			<Title title={title} />
			<div className='section-center projects-center'>
				{projects.map((item, idx) => (
					<Project key={item.id} idx={idx} {...item} />
				))}
			</div>
			{showLink && (
				<Link to='/projects' className='btn center-btn'>
					Projects
				</Link>
			)}
		</section>
	);
};

export default Projects;
