import * as React from 'react';
import './general-info.component.css';

function GeneralInfo() {
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
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Interviewer’s Competency</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Interviewer’s MID</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
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
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Interview Mode</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Interviewer date</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default GeneralInfo;
