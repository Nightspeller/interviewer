import * as React from 'react';
import './grades.component.css';

function Grades({info, callback}: any) {
    let updateProperty = (key: string, value: string) => {
        let tempObj = {};
        tempObj[key] = value;
        callback(Object.assign({}, info, tempObj));
    };
    return (
        <div className="s-grid grades">
            <div className="s-col-full s-content-center">
                Communication Skills
            </div>
            <div className="s-col-1 s-content-center s-hidden-sm-down"/>
            {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((elem, index) =>
                <div className="s-col-4 s-col-md-2 s-content-center" key={`communicationSkills${index}`}>
                    <div className="input-group">
                        <input
                            type="radio"
                            id={`communicationSkills${index}`}
                            name="communicationSkills"
                            onClick={() => updateProperty('communicationSkills', elem)}
                        />
                        <label htmlFor={`communicationSkills${index}`}>{elem}</label>
                    </div>
                </div>
            )}
            <div className="s-col-1 s-content-center s-hidden-sm-down"/>

            <div className="s-col-full s-content-center">
                Overall Assessment of Candidate
            </div>
            <div className="s-col-1 s-content-center s-hidden-sm-down"/>
            {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((elem, index) =>
                <div className="s-col-4 s-col-md-2 s-content-center" key={`overallAssessment${index}`}>
                    <div className="input-group">
                        <input
                            type="radio"
                            id={`overallAssessment${index}`}
                            name="overallAssessment"
                            onClick={() => updateProperty('overallAssessment', elem)}
                        />
                        <label htmlFor={`overallAssessment${index}`}>{elem}</label>
                    </div>
                </div>
            )}
            <div className="s-col-1 s-content-center s-hidden-sm-down"/>
        </div>
    );
}

export default Grades;
