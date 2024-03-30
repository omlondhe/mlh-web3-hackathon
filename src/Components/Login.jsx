import React from "react";

const Login = (props) => {
	return (
		<div className="login-page">
			<div className="login-container">
				<div>
					<h1 className="welcome-message">
						<span>d</span>
						<span>Vote</span>
					</h1>
					<h1 className="welcome-subtext">Decentralized Voting</h1>
				</div>
				<div className="login-art">
					<img src="login.svg" alt="login art" aria-hidden="true" />
				</div>

				<button className="login-button" onClick={props.connectWallet}>
					Login Metamask
				</button>
			</div>
		</div>
	);
};

export default Login;
