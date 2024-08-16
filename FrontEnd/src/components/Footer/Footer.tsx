import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer-box">
            <div className="footer-container">
                <div className="top-row">
                    <div className="top-column">
                        <img className="image" src={logo} />
                    </div>
                    <div className="top-column">
                        <form>
                            <input
                                type="email"
                                placeholder="Subscribe newsletter"
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="heading">About Us</div>
                        <a className="footer-link" href="#">
                            About Us
                        </a>
                        <a className="footer-link" href="#">
                            Careers
                        </a>
                        <a className="footer-link" href="#">
                            Testimonials
                        </a>
                        <a className="footer-link" href="#">
                            Contact Us
                        </a>
                    </div>
                    <div className="column">
                        <div className="heading">Services</div>
                        <a className="footer-link" href="#">
                            Writing
                        </a>
                        <a className="footer-link" href="#">
                            Internships
                        </a>
                        <a className="footer-link" href="#">
                            Coding
                        </a>
                        <a className="footer-link" href="#">
                            Teaching
                        </a>
                    </div>
                    <div className="column">
                        <div className="heading">Contact Us</div>
                        <a className="footer-link" href="#">
                            Uttar Pradesh
                        </a>
                        <a className="footer-link" href="#">
                            Ahemdabad
                        </a>
                        <a className="footer-link" href="#">
                            Indore
                        </a>
                        <a className="footer-link" href="#">
                            Mumbai
                        </a>
                    </div>
                    <div className="column">
                        <div className="heading">More</div>
                        <a className="footer-link" href="#">
                            VIP Blissful Match
                        </a>
                        <a className="footer-link" href="#">
                            Select Blissful Match
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: '10px',
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: '10px',
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
