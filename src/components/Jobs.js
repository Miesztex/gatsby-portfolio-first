import React from 'react';
import Title from './Title';
import { FaAlignRight, FaAngleDoubleRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const Jobs = () => {
	const [jobValue, setJobValue] = React.useState(0);
	const data = useStaticQuery(query);
	const {
		allStrapiJobs: { nodes: jobs },
	} = data;

	const { company, position, date, desc } = jobs[jobValue];

	const jobsList = jobs.map((item, idx) => (
		<button
			key={idx}
			onClick={() => setJobValue(idx)}
			className={`job-btn ${jobValue === idx && 'active-btn'}`}>
			{item.company}
		</button>
	));

	return (
		<section className='section jobs'>
			<Title title='experience' />
			<div className='jobs-center'>
				{/* job buttons */}
				<div className='btn-container'>{jobsList}</div>
				<article className='job-info'>
					{/* description */}
					<h3>{position}</h3>
					<h4>{company}</h4>
					<p className='job-date'>{date}</p>
					{desc.map(item => (
						<div key={item.id} className='job-desc'>
							<FaAngleDoubleRight className='job-icon' />
							<p>{item.name}</p>
						</div>
					))}
				</article>
			</div>
			<Link to='/about' className='btn center-btn'>
				More info
			</Link>
		</section>
	);
};

// jobs query
const query = graphql`
	{
		allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
			nodes {
				company
				date
				position
				desc {
					id
					name
				}
			}
		}
	}
`;
export default Jobs;
