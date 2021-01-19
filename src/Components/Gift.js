import React, { Component } from 'react';
import "./css/component.css";
import "./JS/classie";
import "./JS/main";
class Gift extends Component {
	render() {
		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<div className="container">
					<div id="merrywrap" className="merrywrap">
						<div className="giftbox">
							<div className="cover">
								<div />
							</div>
							<div className="box" />
						</div>
						<div className="icons">
							<div className="row">
								<span className="letter "><img src="../../public/images/Instagram.jpg" className="images" /></span>
								<span className="letter "><img src="../../public/images/Github.jpg" className="images" /></span>
								<span className="letter "><img src="../../public/images/Linkedin.jpg" className="images" /></span>
								<span className="letter "><img src="../../public/images/Gmail.jpg" className="images" /></span>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Gift;
