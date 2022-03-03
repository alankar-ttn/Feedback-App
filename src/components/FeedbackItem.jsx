import React from "react";
import Card from "./customs/Card";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types"

const FeedbackItem = ({ item, handleDelete }) => {
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className="close">
				<FaTimes color="red" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

FeedbackItem.propType = {
    item: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }
    )
}

export default FeedbackItem;
