import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const handleDeleteFeedback = async (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			await fetch(`/feedback/${id}`, { method: "DELETE" });
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	useEffect(() => {
		fetchFeedback();
	}, []);

	const fetchFeedback = async () => {
		const res = await fetch("/feedback?_sort=id&_order=desc");
		const data = await res.json();
		setFeedback(data);
	};

	const addFeedback = async (newFeedback) => {
		const res = await fetch("/feedback", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newFeedback),
		});
		const data = await res.json();
		setFeedback([data, ...feedback]);
	};

	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};

	const updateFeedbackItem = async (id, updItem) => {
		const res = await fetch(`/feedback/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updItem),
		});
		const data = await res.json()
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				handleDelete: handleDeleteFeedback,
				addFeedback,
				editFeedback,
				feedbackEdit,
				updateFeedbackItem,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
