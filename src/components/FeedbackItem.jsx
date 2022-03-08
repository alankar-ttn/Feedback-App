import React, { useContext } from "react";
import Card from "./customs/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import FeedbackContext from "../config/FeedbackContext";

const FeedbackItem = ({ item }) => {
	const { handleDelete, editFeedback } = useContext(FeedbackContext);

	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className="close">
				<FaTimes color="red" />
			</button>
			<button onClick={() => editFeedback(item)} className="edit">
				<FaEdit color="red" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

FeedbackItem.propType = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
	}),
};

export default FeedbackItem;
