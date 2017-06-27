import * as React from 'react';
import './commitments.component.css';

function Commitments() {
    return (
        <div className="s-grid commitments">
            <div className="s-col-full s-content-center">
                Please record if any commitments have been made to the candidate
            </div>
            <div className="s-col-6">
                <fieldset className="text-center">
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
            <div className="s-col-6">
                <fieldset className="text-center">
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
