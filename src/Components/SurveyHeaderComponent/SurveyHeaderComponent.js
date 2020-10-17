import React from 'react'
import '../../Assets/Images/survey_logo.jpg';
import '../../Common/ColorSwatches.css';
import './index.css';

export default function SurveyHeaderComponent() {
    return (
        <div className="layoutContainer">

        <div className="layoutContainer_main">
            <div className="layoutContainer_left">
            <a className="layout_header" href="something"> Survey Form</a>
            <img src="src/Assets/Images/survey_logo.jpg" alt="logo" />
            </div>
            <div className="layout_MarginRight"> <input type="text"></input> </div>
        </div>
        </div>
    )
}
