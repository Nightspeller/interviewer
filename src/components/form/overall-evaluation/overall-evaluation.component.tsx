import * as React from 'react';
import './overall-evaluation.component.css';

function OverallEvaluation() {
    return (
        <div className="sgrid overall-evaluation">
            <div className="scol-full scontent-center">
                Detailed Overall Evaluation Summary by Interviewer
            </div>
            <div className="scol-5 scontent-center-vertical scontent-vertical">
                Detailed write-up on overall assessment on technical capabilities, strengths, leadership
                qualities
                cultural fitment aspects, competency role, related and reasons for shortlisting:
                <div className="text-center">OR</div>
                Lack of technical skills, areas of weakness and/or reasons for not shortlisting the candidate:
            </div>
            <div className="scol-7 scontent-center">
                <textarea />
            </div>
            <div className="scol-5 scontent-center-vertical">
                Areas of improvement / Concerns:
            </div>
            <div className="scol-7 scontent-center">
                <textarea />
            </div>
            <div className="scol-full scontent-center">
                <textarea placeholder="Please record any other role-related feedback on the candidate here"/>
            </div>
        </div>
    );
}

export default OverallEvaluation;
