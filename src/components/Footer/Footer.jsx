
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-dark text-white">
            <div className='pt-4'>
            <a href="http://github.com/raihaninfo"><i className="fab faba fa-github"></i> </a>
            <a href="http://facebook.com/raihan.mahmudi.50"><i className="fab faba fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/raihaninfo/"><i className="fab faba fa-linkedin"></i></a>
            </div>
            <p className="text-white pb-4">&copy; 2021. All Rights Reserve, Made With <span className='love'>❤</span> <a className='text-white' href='https://facebook.com/raihan.mahmudi.50'>Raihan</a></p>
        </div>
    );
};

export default Footer;