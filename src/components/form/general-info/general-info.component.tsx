import * as React from 'react';
import './general-info.component.css';

function GeneralInfo() {
    return (
        <div className="sgrid general-info">
            <div className="scol-12 scol-sm-6">
                <fieldset>
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
            <div className="scol-12 scol-sm-6">
                <fieldset>
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
