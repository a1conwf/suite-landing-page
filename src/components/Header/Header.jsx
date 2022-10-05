import React from "react";
import brandLogo from "../../assets/brand/logo.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<img src={brandLogo} alt="brand-logo" className="brand__logo" />
					<button className="btn secondary">Request Beta Access</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
