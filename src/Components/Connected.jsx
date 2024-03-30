import React, { useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const names = {
	bjp: "Bharatiya Janata Party (BJP)",
	ncp: "National Congress Party (NCP)",
	inc: "Indian National Congress (INC)",
	mns: "Maharashtra Navanirmaan Sena (MNS)",
	ss: "Shivsena",
	nota: "NOTA",
};

const Connected = ({
	account,
	remainingTime,
	showButton,
	voteFunction,
	votingStatus,
	candidates,
}) => {
	const voteIndex = useRef(null);
	const [partyName, setPartyName] = useState("");
	const [openDialog, setOpenDialog] = useState(false);

	const handleClickOpenDialog = (index, partyName) => {
		voteIndex.current = index;
		setOpenDialog(true);
		setPartyName(partyName);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const handleVoteConfirm = () => {
		if (voteIndex && voteIndex.current >= 0) {
			voteFunction(voteIndex.current);
			setOpenDialog(false);
		}
	};

	return candidates.length ? (
		<>
			<Dialog
				open={openDialog}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCloseDialog}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{`Are you sure to vote to ${partyName}?`}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Click confirm to register your vote and cancel to close
						this dialog and select another party.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<button
						className="cancel-button"
						onClick={handleCloseDialog}
					>
						Cancel
					</button>
					<button className="vote-button" onClick={handleVoteConfirm}>
						Confirm
					</button>
				</DialogActions>
			</Dialog>

			<div className="connected-container">
				<header className="connected-header">
					<h1 className="welcome-message">
						<span>d</span>
						<span>Vote</span>
					</h1>
					<p className="connected-account">{`${account?.slice(
						0,
						4
					)}...${account?.slice(-4)}`}</p>
				</header>

				{showButton ? (
					<p className="connected-helper">You have already voted</p>
				) : null}

				<table className="candidates-table">
					<thead>
						<tr>
							<th>Party</th>
							<th>Votes</th>
						</tr>
					</thead>
					<tbody>
						{candidates.map((candidate, index) => (
							<tr key={candidate.name}>
								<td>
									<div className="party">
										<img
											src={`/logos/${candidate.name}.svg`}
											alt={candidate.name}
											className="party-image"
										/>
										<span>{names[candidate.name]}</span>
									</div>
								</td>
								<td>
									{votingStatus && !showButton ? (
										<button
											className="vote-button"
											onClick={() =>
												handleClickOpenDialog(
													index,
													names[candidate.name]
												)
											}
										>
											Vote
										</button>
									) : (
										candidate.voteCount
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	) : (
		<section className="connected-container">
			<div className="connected-loader">
				<CircularProgress
					style={{
						color: "#f77321",
					}}
				/>
			</div>
		</section>
	);
};

export default Connected;
