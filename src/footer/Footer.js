import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container footer">

            <a href="https://www.facebook.com" target="_blank"><img src="assets/img/facebook.png" weight="30px" height="30px" /></a>
            <a href="https://github.com/Rahul-1504022" target="_blank"><img src="assets/img/github.png" weight="30px" height="30px" /></a>
            <a href="https://www.instagram.com" target="_blank"><img src="assets/img/instagram.jpeg" weight="30px" height="30px" /></a>
            <a href="https://www.twitter.com" target="_blank"><img src="assets/img/twitter.png" weight="30px" height="30px" /></a>
            <br />
            <p>&copy;Shahriar : All Rights Reserved</p>
        </div>
    )
}
export default Footer;