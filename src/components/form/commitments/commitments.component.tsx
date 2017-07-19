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
            <fieldset className="s-col-12 s-col-sm-6">
                <legend>Work conditions</legend>
                <div className="s-grid">
                    <label className="s-col-12 s-col-md-3 s-content-center">Location</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: React.FormEvent<HTMLInputElement>) => {
                                updateProperty('location', event.currentTarget.value);
                            }
                        }
                        value={info.location}
                    />
                    <label className="s-col-12 s-col-md-3 s-content-center">Work timings / Shifts</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: React.FormEvent<HTMLInputElement>) => {
                                updateProperty('workTime', event.currentTarget.value);
                            }
                        }
                        value={info.workTime}
                    />
                    <label className="s-col-12 s-col-md-3 s-content-center">Nature of Projects</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: React.FormEvent<HTMLInputElement>) => {
                                updateProperty('projects', event.currentTarget.value);
                            }
                        }
                        value={info.projects}
                    />
                </div>
            </fieldset>
            <fieldset className="s-col-12 s-col-sm-6">
                <legend>Position</legend>
                <div className="s-grid">
                    <label className="s-col-12 s-col-md-3 s-content-center">Role</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: React.FormEvent<HTMLInputElement>) => {
                                updateProperty('role', event.currentTarget.value);
                            }
                        }
                        value={info.role}
                    />
                    <label className="s-col-12 s-col-md-3 s-content-center">Domain</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: React.FormEvent<HTMLInputElement>) => {
                                updateProperty('domain', event.currentTarget.value);
                            }
                        }
                        value={info.domain}
                    />
                    <label className="s-col-12 s-col-md-3 s-content-center">Skill</label>
                    <input
                        className="s-col-12 s-col-md-9"
                        type="text"
                        onChange={
                            (event: React.FormEvent<HTMLInputElement>) => {
                                updateProperty('skill', event.currentTarget.value);
                            }
                        }
                        value={info.skill}
                    />
                </div>
            </fieldset>
        </div>
    );
}

export default Commitments;
