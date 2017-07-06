import * as React from 'react';
import './technical-evaluation.component.css';

function TechnicalEvaliation({info, callback}: any) {
    let technicalSkills = [...info];
    let updateProperty = (index: number, key: string, value: string) => {
        technicalSkills[index][key] = value;
        callback(technicalSkills);
    };
    let addSkill = (event: any) => {
        event.preventDefault();
        technicalSkills.push({skill: '', rating: ''});
        callback(technicalSkills);
    };
    let deleteSkill = (event: any) => {
        event.preventDefault();
        technicalSkills.pop();
        callback(technicalSkills);
    };
    return (
        <div className="s-grid technical-evaliation">
            <div className="s-col-full s-content-center">
                Please rate the candidate on the technical skills evaluated on a scale of 1 to 5 with 1 being the
                minimum and 5 being the maximum.
            </div>
            <div className="s-col-9 s-content-center">
                Technical Skill
            </div>
            <div className="s-col-3 s-content-center">
                Rating (1 to 5)
            </div>
            {technicalSkills.map((elem: any, index: number) =>
                [
                    <div className="s-col-9 s-content-center">
                        <input
                            type="text"
                            onChange={
                                (event: any) => {
                                    updateProperty(index, `skill`, event.nativeEvent.target.value)
                                }
                            }
                            value={elem.skill}
                        />
                    </div>,
                    <div className="s-col-3 s-content-center">
                        <select
                            onChange={
                                (event: any) => {
                                    updateProperty(index, `rating`, event.nativeEvent.target.value)
                                }
                            }
                            value={elem.rating}
                        >
                            <optgroup>
                                <option>NA</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </optgroup>
                        </select>
                    </div>
                ]
            )}

            <div className="s-col-6 s-content-center">
                <button onClick={addSkill}>Add another skill evaluation</button>
            </div>
            <div className="s-col-6 s-content-center">
                <button onClick={deleteSkill}>Delete last skill</button>
            </div>
        </div>
    );
}

export default TechnicalEvaliation;
