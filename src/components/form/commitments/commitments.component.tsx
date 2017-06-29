import * as React from 'react';
import './commitments.component.css';

function Commitments({info, callback}: any) {
    let updateProperty = (key: string, value: string) => {
        let tempObj = {};
        tempObj[key] = value;
        callback(Object.assign({}, info, tempObj));
    };
    return (
        <div className="s-grid commitments">
            <div className="s-col-full s-content-center">
                Please record if any commitments have been made to the candidate
            </div>
            <div className="s-col-12 s-col-sm-6">
                <fieldset className="text-center">
                    <legend>Work conditions</legend>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="number">Location</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('location', event.nativeEvent.target.value)
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Work timings / Shifts</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('workTime', event.nativeEvent.target.value)
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Nature of Projects</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('projects', event.nativeEvent.target.value)
                                    }
                                }
                            />
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="s-col-12 s-col-sm-6">
                <fieldset className="text-center">
                    <legend>Position</legend>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="number">Role</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('role', event.nativeEvent.target.value)
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Domain</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('domain', event.nativeEvent.target.value)
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Skill</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input
                                type="text"
                                onChange={
                                    (event: any) => {
                                        updateProperty('skill', event.nativeEvent.target.value)
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

export default Commitments;
