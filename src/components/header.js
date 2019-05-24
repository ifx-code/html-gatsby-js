import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
    <li className="nav-item">
        <Link className="nav-link" to={props.to}>{props.children}</Link>
    </li>
)

const Header = ({ siteTitle }) => (
  	<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div className="container">
			<Link className="navbar-brand" to="/">{siteTitle}</Link>
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<ListLink to="/">Home</ListLink>
					<ListLink to="/about">About</ListLink>
					<ListLink to="/services">Services</ListLink>
					<ListLink to="/contact">Contact</ListLink>
				</ul>
			</div>
		</div>
	</nav>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
