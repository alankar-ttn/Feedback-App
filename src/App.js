import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutLinkBtn from "./components/AboutLinkBtn";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./config/FeedbackContext";
import About from "./pages/About";

const App = () => {
	return (
		<FeedbackProvider>
			<BrowserRouter>
				<Header text="Feedback App" backgroundColor="red" textColor="white" />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<div className="container">
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</div>
							</>
						}
					></Route>
					<Route path="/about" exact element={<About />} />
				</Routes>
				<AboutLinkBtn />
			</BrowserRouter>
		</FeedbackProvider>
	);
};

export default App;
