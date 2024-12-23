import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const linkClass = ({ isActive }) => {
        return isActive
            ? 'bg-sky-500 px-3 py-2 text-sm font-medium text-white'
            : 'px-3 py-2 text-sm font-medium text-gray-700 hover:bg-sky-300 hover:text-gray-700 hover:shadow-md';
    };
    const mobileLinkClass = ({ isActive }) => {
        return isActive
            ? 'block bg-sky-500 px-3 py-2 text-base font-medium text-white'
            : 'block px-3 py-2 text-base font-medium text-gray-700 hover:bg-sky-300 hover:text-gray-700 hover:shadow-md';
    };

    return (
        <>
            <nav className="bg-sky-100 sticky top-0 z-50">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">

                        {/* Logo Section (Paradise Tours) - Left aligned */}
                        <div className="flex items-center sm:ml-6 sm:block">
                            <NavLink to='/' className="flex items-center">
                                {/* Logo Image */}
                                <img
                                    src="/src/assets/images/logo.png" // Replace with the actual path to your logo
                                    alt="Paradise Tours Logo"
                                    className="h-8 mr-2" // Adjust size of the logo (height 8)
                                />
                                <h1 className='text-sky-500 font-bold'>Paradise Tours</h1>
                            </NavLink>
                        </div>

                        {/* Navigation Links - Right aligned on large screens */}
                        <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink to='/' className={linkClass} aria-current="page">Home</NavLink>
                                    <NavLink to='/destinations' className={linkClass}>Destinations</NavLink>
                                    <NavLink to='/packages' className={linkClass}>Packages</NavLink>
                                    <NavLink to='/blog' className={linkClass}>Blog</NavLink>
                                    <NavLink to='/contact' className={linkClass}>Contact Us</NavLink>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button - Right aligned in mobile view */}
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button onClick={toggleMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state */}
                <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <NavLink to='/' className={mobileLinkClass} aria-current="page">Home</NavLink>
                        <NavLink to='/destinations' className={mobileLinkClass}>Destinations</NavLink>
                        <NavLink to='/packages' className={mobileLinkClass}>Packages</NavLink>
                        <NavLink to='/blog' className={mobileLinkClass}>Blog</NavLink>
                        <NavLink to='/contact' className={mobileLinkClass}>Contact Us</NavLink>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default NavBar;
