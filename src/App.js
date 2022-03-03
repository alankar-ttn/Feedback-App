import React, { useState } from "react";
import "./App.css";
import Card from "./components/customs/Card";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const handleDeleteFeedback = (id) => {
		setFeedback(feedback.filter(item => item.id !== id))
	}

	return (
		<div>
			<Header
				text="Feedback App"
				backgroundColor="red"
				textColor="white"
			/>
			<div className="container">
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={handleDeleteFeedback} />
			</div>
		</div>
	);
};

export default App;
