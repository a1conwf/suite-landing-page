import React from "react";
import logo from "../../assets/brand/logo.svg";
import facebookIcon from "../../assets/svg/icon-facebook.svg";
import twitterIcon from "../../assets/svg/icon-twitter.svg";
import instagramIcon from "../../assets/svg/icon-instagram.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<img src={logo} alt="logo" className="logo" />
					<p className="copyright">Copyright - Suite</p>

					<div className="socials">
						<ul className="socials__list">
							<li className="socials__list-icon">
								<img src={facebookIcon} alt="icon-facebook" />
							</li>
							<li className="socials__list-icon">
								<img src={twitterIcon} alt="icon-twitter" />
							</li>
							<li className="socials__list-icon">
								<img src={instagramIcon} alt="icon-instagram" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
