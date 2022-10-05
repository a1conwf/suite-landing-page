import React from "react";
import aboutImgMob from "../../assets/images/image-jeremy-small.png";
import aboutImgDesk from "../../assets/images/image-jeremy-large.png";
import curvedLine from "../../assets/svg/pattern-curved-line-2.svg";

const About = () => {
	return (
		<section className="about">
			<div className="overlay"></div>
			<div className="container">
				<img className="img-mob" src={aboutImgMob} alt="about-img" />
				<img className="img-desk" src={aboutImgDesk} alt="about-img" />
				<img className="line" src={curvedLine} alt="curved-line" />
				<div className="about__container">
					<div className="about__info">
						<h2 className="about__info-title">
							It just <span>works.</span>
						</h2>
						<p className="about__info-text">“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
						<span className="about__info-name">Jeremy Robinson</span>
						<p className="about__info-pos">Cmo, Fylo</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
