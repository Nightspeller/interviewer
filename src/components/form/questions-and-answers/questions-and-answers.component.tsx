import * as React from 'react';
import './questions-and-answers.component.css';

function QuestionsAndAnswers() {
    return (
        <div className="s-grid questions-and-answers">
            <div className="s-col-full s-content-center">
                Please document comments related to Technical/Domain/Functional Skills
            </div>
            <div className="s-col-6 s-content-center">
                Questions Asked
            </div>
            <div className="s-col-6 s-content-center">
                Your feedback on candidate’s responses
            </div>
            <div className="s-col-6 s-content-center">
                <textarea placeholder="Please enter the question"/>
            </div>
            <div className="s-col-6 s-content-center">
                <textarea placeholder="Please enter an answer"/>
            </div>
            <div className="s-col-6 s-content-center">
                <textarea placeholder="Please enter the question"/>
            </div>
            <div className="s-col-6 s-content-center">
                <textarea placeholder="Please enter an answer"/>
            </div>
            <div className="s-col-6 s-content-center">
                <textarea placeholder="Please enter the question"/>
            </div>
            <div className="s-col-6 s-content-center">
                <textarea placeholder="Please enter an answer"/>
            </div>
            <div className="s-col-full s-content-center">
                <button>Add another question</button>
            </div>
        </div>
    );
}

export default QuestionsAndAnswers;
