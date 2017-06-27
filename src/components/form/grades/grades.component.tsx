import * as React from 'react';
import './grades.component.css';

function Grades() {
    return (
        <div className="s-grid grades">
            <div className="s-col-full s-content-center">
                Communication Skills
            </div>
            <div className="s-col-1 s-content-center"/>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad1" name="radio-group-1"/>
                    <label htmlFor="rad1">Excellent</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad2" name="radio-group-1"/>
                    <label htmlFor="rad2">Very Good</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad3" name="radio-group-1"/>
                    <label htmlFor="rad3">Good</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad4" name="radio-group-1"/>
                    <label htmlFor="rad4">Average</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad5" name="radio-group-1"/>
                    <label htmlFor="rad5">Below Average</label>
                </div>
            </div>
            <div className="s-col-full s-content-center">
                Overall Assessment of Candidate
            </div>
            <div className="s-col-1 s-content-center"/>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad-2-1" name="radio-group-2"/>
                    <label htmlFor="rad-2-1">Excellent</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad-2-2" name="radio-group-2"/>
                    <label htmlFor="rad-2-2">Very Good</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad-2-3" name="radio-group-2"/>
                    <label htmlFor="rad-2-3">Good</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad-2-4" name="radio-group-2"/>
                    <label htmlFor="rad-2-4">Average</label>
                </div>
            </div>
            <div className="s-col-2 s-content-center">
                <div className="input-group">
                    <input type="radio" id="rad-2-5" name="radio-group-2"/>
                    <label htmlFor="rad-2-5">Below Average</label>
                </div>
            </div>
            <div className="s-col-1 s-content-center"/>
        </div>
    );
}

export default Grades;
