import * as React from 'react';
import './commitments.component.css';

function Commitments() {
    return (
        <div className="sgrid commitments">
            <div className="scol-full scontent-center">
                Please record if any commitments have been made to the candidate
            </div>
            <div className="scol-6">
                <fieldset>
                    <legend>Work conditions</legend>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="number">Location</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Work timings / Shifts</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Nature of Projects</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="scol-6">
                <fieldset>
                    <legend>Position</legend>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="number">Role</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="disabled">Domain</label>
                        </div>
                        <div className="col-sm-12 col-md">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row responsive-label">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="readonly">Skill</label>
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

export default Commitments;
