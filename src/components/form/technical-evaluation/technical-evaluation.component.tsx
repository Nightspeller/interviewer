import * as React from 'react';
import './technical-evaluation.component.css';

function TechnicalEvaliation() {
    return (
        <div className="sgrid technical-evaliation">
            <div className="scol-full scontent-center">
                Please rate the candidate on the technical skills evaluated on a scale of 1 to 5 with 1 being the
                minimum and 5 being the maximum.
            </div>
            <div className="scol-1 scontent-center">
                №
            </div>
            <div className="scol-8 scontent-center">
                Technical Skill
            </div>
            <div className="scol-3 scontent-center">
                Rating (1 to 5)
            </div>
            <div className="scol-1 scontent-center">
                <input type="text"/>
            </div>
            <div className="scol-8 scontent-center">
                <input type="text"/>
            </div>
            <div className="scol-3 scontent-center">
                <input type="text"/>
            </div>
            <div className="scol-1 scontent-center">
                <input type="text"/>
            </div>
            <div className="scol-8 scontent-center">
                <input type="text"/>
            </div>
            <div className="scol-3 scontent-center">
                <input type="text"/>
            </div>
            <div className="scol-full scontent-center">
                <button>Add another skill evaluation</button>
            </div>
        </div>
    );
}

export default TechnicalEvaliation;
