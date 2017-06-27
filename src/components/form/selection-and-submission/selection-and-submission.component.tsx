import * as React from 'react';
import './selection-and-submission.component.css';

function SelectionAndSubmission() {
    return (
        <div className="sgrid selection-and-submission">
            <div className="scol-full scontent-center">
                <textarea placeholder="Reasons for Select/Not Aligned"/>
            </div>
            <div className="scol-6 scontent-center">
                <div className="input-group">
                    <input type="radio" id="check1" name="final-decision"/>
                    <label htmlFor="check1">Selected</label>
                </div>
            </div>
            <div className="scol-6 scontent-center">
                <div className="input-group">
                    <input type="radio" id="check2" name="final-decision"/>
                    <label htmlFor="check2">Not Aligned</label>
                </div>
            </div>
            <div className="scol-full scontent-center">
                <button>Submit</button>
            </div>
        </div>
    );
}

export default SelectionAndSubmission;
