import * as React from 'react';
import './technical-evaluation.component.css';

function TechnicalEvaliation() {
    return (
        <div className="s-grid technical-evaliation">
            <div className="s-col-full s-content-center">
                Please rate the candidate on the technical skills evaluated on a scale of 1 to 5 with 1 being the
                minimum and 5 being the maximum.
            </div>
            <div className="s-col-1 s-content-center">
                №
            </div>
            <div className="s-col-8 s-content-center">
                Technical Skill
            </div>
            <div className="s-col-3 s-content-center">
                Rating (1 to 5)
            </div>
            <div className="s-col-1 s-content-center">
                <input type="text"/>
            </div>
            <div className="s-col-8 s-content-center">
                <input type="text"/>
            </div>
            <div className="s-col-3 s-content-center">
                <input type="text"/>
            </div>
            <div className="s-col-1 s-content-center">
                <input type="text"/>
            </div>
            <div className="s-col-8 s-content-center">
                <input type="text"/>
            </div>
            <div className="s-col-3 s-content-center">
                <input type="text"/>
            </div>
            <div className="s-col-full s-content-center">
                <button>Add another skill evaluation</button>
            </div>
        </div>
    );
}

export default TechnicalEvaliation;
