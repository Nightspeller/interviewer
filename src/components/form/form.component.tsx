import * as React from 'react';
import './form.component.css';

function From() {
    return (
        <form>
            <input id="modal-toggle" type="checkbox"/>
            <div className="modal">
                <div className="card">
                    <label htmlFor="modal-toggle" className="close"/>
                    <h3 className="section">INTERVIEW GUIDELINES</h3>
                    <div className="section">
                        Do’s
                        <ul>
                            <li>Go through the resume before you meet the candidate</li>
                            <li>Be courteous and polite to the candidate. Interact with him/her in a professional
                                manner.
                            </li>
                            <li>Remember that you are representing Mindtree as a brand.</li>
                            <li>If you are uncomfortable with the candidature, please do not proceed forward
                                irrespective of
                                business pressure
                            </li>
                            <li>Please document your discussion with the candidate in role-related details on this
                                form
                            </li>
                            <li>Make sure you ask the candidate if he/she has any questions to ask.</li>
                            <li>Please check for strong communication skills, most of our people have to face clients.
                            </li>
                            <li>Remember: interviewing is about finding out what the candidate knows best and not what
                                the
                                candidate does not know.
                            </li>
                            <li>Focus on Technical ability/knowledge of the candidate</li>
                            <li>Clearly give your recommendation (select/not aligned) for the 2nd round panel</li>
                            <li>Share your feedback on this form with the appropriate stakeholder (TA Manager, TA SPOC)
                                within 24 hours
                            </li>
                        </ul>
                        Don’ts
                        <ul>
                            <li>Get into CTC/Salary discussions</li>
                            <li>Decide competency fitment</li>
                            <li>Ask personal questions that are not related to the role</li>
                            <li>Ask illegal questions, review the Introduction to US Interview Training</li>
                            <li>Ask questions if you are not sure if they are legal: jot it down and reach out to People
                                Function to determine if/how the question can be asked
                            </li>
                            <li>Move forward with candidature if the candidate is not a fit for the role or Mindtree
                            </li>
                            <li>Write personal or non-job-related notes on the resume or in this</li>
                        </ul>
                    </div>
                    <h3 className="section"><label htmlFor="modal-toggle">Close</label></h3>
                </div>
            </div>

            <div className="sgrid">
                <div className="scol-full scontent-center">
                    <div style={{textAlign: 'center'}}>
                        TECHNICAL EVALUATION FORM<br/>
                        <label htmlFor="modal-toggle">INTERVIEW GUIDELINES</label>
                    </div>
                </div>
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
                <div className="scol-full scontent-center">
                    Please document comments related to Technical/Domain/Functional Skills
                </div>
                <div className="scol-6 scontent-center">
                    Questions Asked
                </div>
                <div className="scol-6 scontent-center">
                    Your feedback on candidate’s responses
                </div>
                <div className="scol-6 scontent-center">
                    <textarea placeholder="Please enter the question"/>
                </div>
                <div className="scol-6 scontent-center">
                    <textarea placeholder="Please enter an answer"/>
                </div>
                <div className="scol-6 scontent-center">
                    <textarea placeholder="Please enter the question"/>
                </div>
                <div className="scol-6 scontent-center">
                    <textarea placeholder="Please enter an answer"/>
                </div>
                <div className="scol-6 scontent-center">
                    <textarea placeholder="Please enter the question"/>
                </div>
                <div className="scol-6 scontent-center">
                    <textarea placeholder="Please enter an answer"/>
                </div>
                <div className="scol-full scontent-center">
                    <button>Add another question</button>
                </div>
                <div className="scol-full scontent-center">
                    Please rate the candidate on the technical skills evaluated on a scale of 1 to 5 with 1 being the
                    minimum and 5 being the maximum.
                </div>
                <div className="scol-1 scontent-center">
                    №
                </div>
                <div className="scol-8 scontent-center">
                    Technical Skill
                </div>
                <div className="scol-3 scontent-center">
                    Rating (1 to 5)
                </div>
                <div className="scol-1 scontent-center">
                    <input type="text"/>
                </div>
                <div className="scol-8 scontent-center">
                    <input type="text"/>
                </div>
                <div className="scol-3 scontent-center">
                    <input type="text"/>
                </div>
                <div className="scol-1 scontent-center">
                    <input type="text"/>
                </div>
                <div className="scol-8 scontent-center">
                    <input type="text"/>
                </div>
                <div className="scol-3 scontent-center">
                    <input type="text"/>
                </div>
                <div className="scol-full scontent-center">
                    <button>Add another skill evaluation</button>
                </div>
                <div className="scol-full scontent-center">
                    Detailed Overall Evaluation Summary by Interviewer
                </div>
                <div className="scol-5 scontent-center-vertical scontent-vertical">
                    Detailed write-up on overall assessment on technical capabilities, strengths, leadership
                    qualities
                    cultural fitment aspects, competency role, related and reasons for shortlisting:
                    <div className="text-center">OR</div>
                    Lack of technical skills, areas of weakness and/or reasons for not shortlisting the candidate:
                </div>
                <div className="scol-7 scontent-center">
                    <textarea />
                </div>
                <div className="scol-5 scontent-center-vertical">
                    Areas of improvement / Concerns:
                </div>
                <div className="scol-7 scontent-center">
                    <textarea />
                </div>
                <div className="scol-full scontent-center">
                    <textarea
                        placeholder="Please record any other role-related feedback on the candidate here"/>
                </div>
                <div className="scol-full scontent-center">
                    Communication Skills
                </div>
                <div className="scol-1 scontent-center"/>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad1" name="radio-group-1"/>
                        <label htmlFor="rad1">Excellent</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad2" name="radio-group-1"/>
                        <label htmlFor="rad2">Very Good</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad3" name="radio-group-1"/>
                        <label htmlFor="rad3">Good</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad4" name="radio-group-1"/>
                        <label htmlFor="rad4">Average</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad5" name="radio-group-1"/>
                        <label htmlFor="rad5">Below Average</label>
                    </div>
                </div>
                <div className="scol-full scontent-center">
                    Overall Assessment of Candidate
                </div>
                <div className="scol-1 scontent-center"/>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad-2-1" name="radio-group-2"/>
                        <label htmlFor="rad-2-1">Excellent</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad-2-2" name="radio-group-2"/>
                        <label htmlFor="rad-2-2">Very Good</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad-2-3" name="radio-group-2"/>
                        <label htmlFor="rad-2-3">Good</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad-2-4" name="radio-group-2"/>
                        <label htmlFor="rad-2-4">Average</label>
                    </div>
                </div>
                <div className="scol-2 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="rad-2-5" name="radio-group-2"/>
                        <label htmlFor="rad-2-5">Below Average</label>
                    </div>
                </div>
                <div className="scol-1 scontent-center"/>
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
                <div className="scol-full scontent-center">
                    <textarea placeholder="Reasons for Select/Not Aligned"/>
                </div>
                <div className="scol-6 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="check1" name="final-decision"/>
                        <label htmlFor="check1">Selected</label>
                    </div>
                </div>
                <div className="scol-6 scontent-center">
                    <div className="input-group">
                        <input type="radio" id="check2"  name="final-decision"/>
                        <label htmlFor="check2">Not Aligned</label>
                    </div>
                </div>
                <div className="scol-full scontent-center">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default From;
