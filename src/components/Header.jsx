import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, backgroundColor, textColor }) => {
	return (
		<header style={{ backgroundColor: backgroundColor, color: textColor }}>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>
	);
};

Header.defaultProps = {
	text: "Alankar",
	backgroundColor: "rgba(0,0,0,0.4)",
	textColor: "#ff6a95",
};

Header.propTypes = {
	text: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default Header;
