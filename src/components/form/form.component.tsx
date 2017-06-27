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
            <div className="sgrid">
                <div className="scol-full scontent-center scontent-vertical">
                    TECHNICAL EVALUATION FORM
                    <InterviewGuidelines/>
                </div>

                <div className="scol-full">
                    <GeneralInfo/>
                </div>

                <div className="scol-full">
                    <QuestionsAndAnswers/>
                </div>

                <div className="scol-full">
                    <TechnicalEvaluation/>
                </div>

                <div className="scol-full">
                    <OverallEvaluation/>
                </div>

                <div className="scol-full">
                    <Grades/>
                </div>

                <div className="scol-full">
                    <Commitments/>
                </div>

                <div className="scol-full">
                    <SelectionAndSubmission/>
                </div>
            </div>
        </form>
    );
}

export default From;
