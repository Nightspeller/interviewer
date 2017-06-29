import * as React from 'react';
import './selection-and-submission.component.css';

function SelectionAndSubmission({info, callback, submitForm}: any) {
    let updateProperty = (key: string, value: string | boolean) => {
        let tempObj = {};
        tempObj[key] = value;
        callback(Object.assign({}, info, tempObj));
    };
    return (
        <div className="s-grid selection-and-submission">
            <div className="s-col-full s-content-center">
                <textarea
                    placeholder="Reasons for Select/Not Aligned"
                    onChange={
                        (event: any) => {
                            updateProperty(`reasons`, event.nativeEvent.target.value)
                        }
                    }
                />
            </div>
            <div className="s-col-6 s-content-center">
                <div className="input-group">
                    <input
                        type="radio"
                        id="selected"
                        name="choice"
                        onClick={() => updateProperty('selected', true)}
                    />
                    <label htmlFor="selected">Selected</label>
                </div>
            </div>
            <div className="s-col-6 s-content-center">
                <div className="input-group">
                    <input
                        type="radio"
                        id="notSelected"
                        name="choice"
                        onClick={() => updateProperty('selected', false)}
                    />
                    <label htmlFor="notSelected">Not Aligned</label>
                </div>
            </div>
            <div className="s-col-full s-content-center">
                <button onClick={(event: any) => {event.preventDefault(); submitForm()}}>Submit</button>
            </div>
        </div>
    );
}

export default SelectionAndSubmission;
