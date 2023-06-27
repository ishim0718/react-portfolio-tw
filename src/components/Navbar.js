import React, { useState } from 'react';

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="nav">
			<ul>
				<li className={currentPage === 'About' ? 'active' : ''}>
					<a 
						href="/#about"
						onClick={() => handlePageChange('About')}
					>About Me</a>
				</li>
				<li className={currentPage === 'Portfolio' ? 'active' : ''}>
					<a 
						href="/#portfolio"
						onClick={() => handlePageChange('Portfolio')}
					>Portfolio</a>
				</li>
				<li className={currentPage === 'Contact' ? 'active' : ''}>
					<a 
						href="/#contact"
						onClick={() => handlePageChange('Contact')}
					>Contact</a>
				</li>
				<li className={currentPage === 'Resume' ? 'active' : ''}	>
					<a 
						href="/#Resume"
						onClick={() => handlePageChange('Resume')}
					>Resume</a>
				</li>
			</ul>	
    </nav>
	);
}