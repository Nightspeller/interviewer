import * as React from 'react';
import './interview-guidelines.component.css';

function InterviewGuidelines() {
    return (
        <div className="interview-guidelines hide_from_print">
            <label htmlFor="modal-toggle" className="modal-link">Interview Guidelines</label>
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
        </div>
    );
}

export default InterviewGuidelines;
