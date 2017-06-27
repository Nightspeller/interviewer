import * as React from 'react';
import './selection-and-submission.component.css';

function SelectionAndSubmission() {
    return (
        <div className="s-grid selection-and-submission">
            <div className="s-col-full s-content-center">
                <textarea placeholder="Reasons for Select/Not Aligned"/>
            </div>
            <div className="s-col-6 s-content-center">
                <div className="input-group">
                    <input type="radio" id="check1" name="final-decision"/>
                    <label htmlFor="check1">Selected</label>
                </div>
            </div>
            <div className="s-col-6 s-content-center">
                <div className="input-group">
                    <input type="radio" id="check2" name="final-decision"/>
                    <label htmlFor="check2">Not Aligned</label>
                </div>
            </div>
            <div className="s-col-full s-content-center">
                <button>Submit</button>
            </div>
        </div>
    );
}

export default SelectionAndSubmission;
