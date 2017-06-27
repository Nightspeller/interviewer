import * as React from 'react';
import './questions-and-answers.component.css';

function QuestionsAndAnswers() {
    return (
        <div className="sgrid questions-and-answers">
            <div className="scol-full scontent-center">
                Please document comments related to Technical/Domain/Functional Skills
            </div>
            <div className="scol-6 scontent-center">
                Questions Asked
            </div>
            <div className="scol-6 scontent-center">
                Your feedback on candidate’s responses
            </div>
            <div className="scol-6 scontent-center">
                <textarea placeholder="Please enter the question"/>
            </div>
            <div className="scol-6 scontent-center">
                <textarea placeholder="Please enter an answer"/>
            </div>
            <div className="scol-6 scontent-center">
                <textarea placeholder="Please enter the question"/>
            </div>
            <div className="scol-6 scontent-center">
                <textarea placeholder="Please enter an answer"/>
            </div>
            <div className="scol-6 scontent-center">
                <textarea placeholder="Please enter the question"/>
            </div>
            <div className="scol-6 scontent-center">
                <textarea placeholder="Please enter an answer"/>
            </div>
            <div className="scol-full scontent-center">
                <button>Add another question</button>
            </div>
        </div>
    );
}

export default QuestionsAndAnswers;
