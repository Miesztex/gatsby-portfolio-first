import React from 'react';
import logo from '../assets/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/links';
const Navbar = ({ setIsOpen }) => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button className='toggle-btn'>
						<FaAlignRight onClick={() => setIsOpen(true)} />
					</button>
				</div>
				<PageLinks styleClass='nav-links' />
			</div>
		</nav>
	);
};

export default Navbar;
