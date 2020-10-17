import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/MainNavigation/index";
import MainNav from "./Components/MainNavigation/index";
import SurveyHeaderComponent from "./Components/SurveyHeaderComponent/SurveyHeaderComponent";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import SurveyBody from "./Components/SurveyBody/SurveyBody";
import RatingContainer from "./Components/RatingContainer/RatingContainer";
import TextArea from "./Components/TextAreaComponent/TextArea";
import Button from "./Components/ButtonComponent/Button";
import QuestionText from "./Components/QuestionText/QuestionText";

function App() {
	return (
		// <div className="App">
		// </div>
		<div>
			<SurveyHeaderComponent />
			<MainNav />
			<div className='survey_body_container'>
				<SurveyBody />
				<RatingContainer />
				<QuestionText />
				<TextArea />
				<Button />
			</div>
		</div>
	);
}

export default App;
