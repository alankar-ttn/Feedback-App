import React, { useContext } from "react";
import FeedbackContext from "../config/FeedbackContext";

const FeedbackStats = () => {

	const {feedback} = useContext(FeedbackContext)

	let average = (feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length).toFixed(
		1
	);

	return (
		<div className={`feedback-stats ${(feedback.length === 0 || !feedback) && "hidden"}`}>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
};

export default FeedbackStats;
