import React from 'react'
import logoTwo from '../images/light-logo.png'

const Footer = () => (
    <footer id="footer">
        <div class="wrapper">
            <div class="footer__brand-logo"><img src={logoTwo} /></div>
            <div class="footer__social-links">
                <a href="https://github.com/Mister-maker" target="blank"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/Man_of_focus" target="blank"> <i class="fab fa-twitter"></i></a>
                <a href="https://dribbble.com/Mister-maker" target="blank"> <i class="fab fa-dribbble"></i></a>
                <a href="https://www.linkedin.com/in/man-of-focus" target="blank"> <i class="fab fa-linkedin"></i></a></div>
            <div class="footer__copy-right">
                <p>&copy; 2019 january, all rights reserved to Mohit Aggarwal</p>
            </div>
            <div class="footer__links">
                <ul>
                    <li><a href="/contact/">Contact Me  &nbsp;&nbsp;</a></li>
                    <li><a href="/about/">About Me</a></li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer
