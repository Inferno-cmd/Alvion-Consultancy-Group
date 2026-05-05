import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    // Adds a dark background to navbar when scrolling
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='NexaTech Logo' className='logo'/>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#solutions">Our Solution</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Products & services</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#contact"><button className='btn'>Contact Us</button></a></li>
            </ul>
        </nav>
    )
} 
export default Navbar