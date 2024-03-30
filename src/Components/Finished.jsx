import React from "react";

const Finished = () => {
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
					<img src="finish.svg" alt="finish art" aria-hidden="true" />
				</div>

				<h1 className="voting-finished">Voting is finished! 👋</h1>
			</div>
		</div>
	);
};

export default Finished;
