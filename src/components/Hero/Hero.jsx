import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
    return(
        <div className='Hero'>
            <div className='hero-text'>
                <h1>The Future of Business Technology</h1>
                <p>Discover the power of our cutting-edge technology solutions designed to propel your business into the future. A Value-Added Reseller (VAR) built to consult, sell,
install, and maintain enterprise technology - end to end. we provide the tools you need to stay ahead in a rapidly evolving digital landscape.</p>
                <button className='btn'>Learn More </button>
            </div>
        </div>
    )
}
export default Hero