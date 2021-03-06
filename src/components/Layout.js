import React from 'react';
// import "../css/main.css"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<>
			<Navbar setIsOpen={setIsOpen} />
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
