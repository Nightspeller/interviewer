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
            <div className="s-col-12 s-col-sm-6">
                <fieldset className="text-center">
                    <legend>Interviewer's info</legend>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="number">Interviewer’s Name</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('interviewerName', event.nativeEvent.target.value)
                                    }
                                }
                                value={info.interviewerName}
                            />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Interviewer’s Competency</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <select
                                onChange={
                                    (event: any) => {
                                        updateProperty('interviewerCompetency', event.nativeEvent.target.value)
                                    }
                                }
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
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Interviewer’s MID</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('interviewerMid', event.nativeEvent.target.value)
                                    }
                                }
                            />
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="s-col-12 s-col-sm-6">
                <fieldset className="text-center">
                    <legend>General info</legend>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="number">Candidate’s Name</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={(event: any) => {
                                    updateProperty('candidateName', event.nativeEvent.target.value)
                                }
                                }
                            />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Interview Mode</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <select
                                onChange={
                                    (event: any) => {
                                        updateProperty('interviewMode', event.nativeEvent.target.value)
                                    }
                                }
                            >
                                <optgroup>
                                    <option>NA</option>
                                    <option>Remote</option>
                                    <option>In person</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Interview date</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="date"
                                onChange={(event: any) => {
                                    updateProperty('InterviewDate', event.nativeEvent.target.value)
                                }
                                }
                            />
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default GeneralInfo;
