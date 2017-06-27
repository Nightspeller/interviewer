import * as React from 'react';
import './form.component.css';
import InterviewGuidelines from './interview-guidelines/interview-guidelines.component';
import GeneralInfo from './general-info/general-info.component';
import QuestionsAndAnswers from './questions-and-answers/questions-and-answers.component';
import TechnicalEvaluation from './technical-evaluation/technical-evaluation.component';
import OverallEvaluation from './overall-evaluation/overall-evaluation.component';
import Grades from './grades/grades.component';
import Commitments from './commitments/commitments.component';
import SelectionAndSubmission from './selection-and-submission/selection-and-submission.component';

function From() {
    return (
        <form className="form">
            <div className="s-grid">
                <div className="s-col-full s-content-center s-content-vertical">
                    TECHNICAL EVALUATION FORM
                    <InterviewGuidelines/>
                </div>

                <div className="s-col-full">
                    <GeneralInfo/>
                </div>

                <div className="s-col-full">
                    <QuestionsAndAnswers/>
                </div>

                <div className="s-col-full">
                    <TechnicalEvaluation/>
                </div>

                <div className="s-col-full">
                    <OverallEvaluation/>
                </div>

                <div className="s-col-full">
                    <Grades/>
                </div>

                <div className="s-col-full">
                    <Commitments/>
                </div>

                <div className="s-col-full">
                    <SelectionAndSubmission/>
                </div>
            </div>
        </form>
    );
}

export default From;
