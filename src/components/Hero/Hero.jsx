import React from "react";
import curvedLine from "../../assets/svg/pattern-curved-line-1.svg";
import heroImgMob from "../../assets/images/image-hero-landscape.png";
import heroImgDesk from "../../assets/images/image-hero-portrait.png";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__inner">
					<div className="hero__content">
						<div className="hero__content-solution">
							<img src={curvedLine} alt="curved-line" />
							<h1>
								A <span>super solution</span> for your <span>business.</span>{" "}
							</h1>
							<p>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
							<button className="btn primary">Request Beta Access</button>
						</div>
						<div className="hero__content-img">
							<img className="img-mob" src={heroImgMob} alt="hero-img-mob" />
							<img className="img-desk" src={heroImgDesk} alt="hero-img-desk" />
						</div>
					</div>
					<div className="hero__stats">
						<div className="hero__stat">
							<span className="hero__stat-qty">2k+</span>
							<p className="hero__stat-name">Companies</p>
						</div>

						<div className="hero__stat">
							<span className="hero__stat-qty">8</span>
							<p className="hero__stat-name">Languages</p>
						</div>
						<div className="hero__stat">
							<span className="hero__stat-qty">1.2M</span>
							<p className="hero__stat-name">Leads</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
