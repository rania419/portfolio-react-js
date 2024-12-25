import React, { useState } from 'react'
import { navLinks } from '../constants';
import { useEffect } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState( );
    const toggleMenu = () => {
        setIsOpen((pervIsOpen) => !pervIsOpen);
    }

    const NavItems = () => {
        return(
            <ul className='nav-ul'>
                {/* {["Home", "About", "Services", "Contact"].map((item, index) => (
                    <li key={index} className='nav-li'>
                        <a href="/" className='nav-li_a'></a>
                    </li>
                ) )} */}

                {navLinks.map(({id, href, name}) => (
                    <li  key={id} className='nav-li' onClick={() => {}}>
                
                        <a href={href}>{name}</a>
                    </li>
                ))}
                
            </ul>
        )

    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black-200' : 'bg-transparent'}`}>
            
            <div className='max-w-7xl mx-auto '>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    
                    <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors '>
                        IbrahimKH
                    </a>

                    <button onClick={toggleMenu} className='text-neutral-400 sm:hidden flex '>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6'/>
                    </button>

                    <nav className='sm:flex hidden cursor-pointer'> {/* hidden in small devices else flex */}
                            <NavItems/>
                            {/* adding nav items as separate component its because we will use the same nav items in both the desktop and mobile navigation bar */}

                        </nav>
                </div>
            </div>

            {/* this is sidebar for mobile menu  */}
            <div className={`nav-sidebar    ${isOpen ? 'max-h-screen' : 'max-h-0'}`}> 
                <nav className='p-5'>
                    <NavItems/>
                </nav>
            </div>
        </header>
    )
}

export default Navbar