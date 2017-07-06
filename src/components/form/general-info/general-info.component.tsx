import * as React from 'react';
import './general-info.component.css';

function GeneralInfo({info, callback}: any) {
    let updateProperty = (key: string, value: string) => {
        let tempObj = {};
        tempObj[key] = value;
        callback(Object.assign({}, info, tempObj));
    };
    return (
        <div className="s-grid general-info">
            <fieldset className="s-col-12 s-col-sm-6">
                <legend>Interviewer's info</legend>
                <div className="s-grid">
                    <label className="s-col-12 s-col-md-3 s-content-center">Interviewer’s Name</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: any) => {
                                updateProperty('interviewerName', event.nativeEvent.target.value)
                            }
                        }
                        value={info.interviewerName}
                    />
                    <label className="s-col-12 s-col-md-3 s-content-center">Interviewer’s Competency</label>
                    <select
                        className="s-col-12 s-col-md-9"
                        onChange={
                            (event: any) => {
                                updateProperty('interviewerCompetency', event.nativeEvent.target.value)
                            }
                        }
                        value={info.interviewerCompetency}
                    >
                        <optgroup>
                            <option>NA</option>
                            <option>C1</option>
                            <option>C2</option>
                            <option>C3</option>
                            <option>C4</option>
                            <option>C5</option>
                            <option>C6</option>
                            <option>C7</option>
                            <option>C8</option>
                            <option>C9</option>
                        </optgroup>
                    </select>
                    <label className="s-col-12 s-col-md-3 s-content-center">Interviewer’s MID</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: any) => {
                                updateProperty('interviewerMid', event.nativeEvent.target.value)
                            }
                        }
                        value={info.interviewerMid}
                    />
                </div>
            </fieldset>
            <fieldset className="s-col-12 s-col-sm-6">
                <legend>General info</legend>
                <div className="s-grid">
                    <label className="s-col-12 s-col-md-3 s-content-center">Candidate’s Name</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: any) => {
                                updateProperty('candidateName', event.nativeEvent.target.value)
                            }
                        }
                        value={info.candidateName}
                    />
                    <label className="s-col-12 s-col-md-3 s-content-center">Interview Mode</label>
                    <select
                        className="s-col-12 s-col-md-9"
                        onChange={
                            (event: any) => {
                                updateProperty('interviewMode', event.nativeEvent.target.value)
                            }
                        }
                        value={info.interviewMode}
                    >
                        <optgroup>
                            <option>NA</option>
                            <option>Remote</option>
                            <option>In person</option>
                        </optgroup>
                    </select>
                    <label className="s-col-12 s-col-md-3 s-content-center">Interview date</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="date"
                        onChange={
                            (event: any) => {
                                updateProperty('interviewDate', event.nativeEvent.target.value)
                            }
                        }
                        value={info.interviewDate}
                    />
                </div>
            </fieldset>
        </div>
    );
}

export default GeneralInfo;
