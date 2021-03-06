import * as React from 'react';
import './selection-and-submission.component.css';

function SelectionAndSubmission({info, callback, submitForm, printForm}: any) {
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
                    value={info.reasons}
                />
            </div>
            <div className="s-col-6 s-content-center">
                <div className="input-group">
                    <input
                        type="radio"
                        id="selected"
                        name="choice"
                        onChange={() => updateProperty('selected', true)}
                        checked={info.selected === true}
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
                        onChange={() => updateProperty('selected', false)}
                        checked={info.selected === false}
                    />
                    <label htmlFor="notSelected">Not Aligned</label>
                </div>
            </div>
            <div className="s-col-full s-content-center">
                <button
                    className="hide_from_print"
                    onClick={(event: any) => {
                        event.preventDefault();
                        submitForm();
                    }}
                >
                    Submit
                </button>
                <button
                    className="hide_from_print"
                    hidden={window.location && window.location.pathname.split('/')[2] === undefined}
                    onClick={(event: any) => {
                        event.preventDefault();
                        submitForm('update');
                    }}
                >
                    Update
                </button>
                <button
                    className="hide_from_print"
                    onClick={
                        (event) => {
                            event.preventDefault();
                            printForm();
                        }}
                >
                    Get PDF
                </button>


            </div>
        </div>
    );
}

export default SelectionAndSubmission;
