import React from 'react';
import Title from './Title';
import services from '../constants/services';
const Services = () => {
	return (
		<section className='section bg-gray'>
			<Title title='services' />
			<div className='services-center section-center'>
				{services.map(serv => {
					const { id, icon, title, text } = serv;
					return (
						<article key={id} className='service'>
							{icon}
							<h4>{title}</h4>
							<div className='underline'></div>
							<p>{text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
