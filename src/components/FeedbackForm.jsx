import React, { useContext, useEffect, useState } from "react";
import Button from "./customs/Button";
import Card from "./customs/Card";
import { v4 as uuidv4 } from "uuid";
import FeedbackContext from "../config/FeedbackContext";

const FeedbackForm = () => {
	const { addFeedback, feedbackEdit, updateFeedbackItem } = useContext(FeedbackContext);

	const [text, setText] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [validationMessage, setValidationMessage] = useState(null);
	const [ratingValidationMessage, setRatingValidationMessage] = useState(null);
	const [rating, setRating] = useState(0);

	const validateFeedbackText = ({ target: { value } }) => {
		if (value === "") {
			setBtnDisabled(true);
			setValidationMessage(null);
		} else if (value.trim().length < 10) {
			setValidationMessage("Feedback must be more than 10 characters!");
			setBtnDisabled(true);
		} else {
			setValidationMessage(null);
			setBtnDisabled(false);
		}
		setText(value);
	};

	const validateFeedbackRating = ({ target: { value } }) => {
		if (value === 0) {
			setBtnDisabled(true);
			setRatingValidationMessage(null);
		} else if (value < 10) {
			setRatingValidationMessage("Rating must be greater than 0");
			setBtnDisabled(true);
		} else {
			setRatingValidationMessage(null);
			text !== "" && value.trim().length > 10 && rating !== 0 && setBtnDisabled(false);
		}
		setRating(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const id = uuidv4();
			if (feedbackEdit.edit === true) {
				updateFeedbackItem(feedbackEdit.item.id, {
					id,
					text,
					rating: parseInt((rating / 10).toFixed(0)),
				});
			} else {
				addFeedback({
					id,
					text,
					rating: parseInt((rating / 10).toFixed(0)),
				});
			}
			setText("");
			setRating(0);
			setBtnDisabled(true);
		}
	};

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating * 10);
		}
	}, [feedbackEdit]);

	return (
		<Card>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>How would you rate your service with us?</h2>
				<div className="input-group">
					<input
						style={{ width: "95%" }}
						min={0}
						type="range"
						step={10}
						value={rating}
						onChange={(e) => validateFeedbackRating(e)}
					/>
					<h3 style={{ marginLeft: "10px", width: "5%" }}>{(rating / 10).toFixed(0)}</h3>
				</div>
				<div className="input-group">
					<input
						type="text"
						value={text}
						onChange={(e) => validateFeedbackText(e)}
						placeholder="Write a review"
					/>
					<Button type="submit" disabled={btnDisabled}>
						Send
					</Button>
				</div>
				{validationMessage !== null && <div className="message">{validationMessage}</div>}
				{ratingValidationMessage !== null && (
					<div className="message">{ratingValidationMessage}</div>
				)}
			</form>
		</Card>
	);
};

export default FeedbackForm;
