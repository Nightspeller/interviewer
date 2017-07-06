import * as React from 'react';
import './overall-evaluation.component.css';

function OverallEvaluation({info, callback}: any) {
    let updateProperty = (key: string, value: string) => {
        let tempObj = {};
        tempObj[key] = value;
        callback(Object.assign({}, info, tempObj));
    };
    return (
        <div className="s-grid overall-evaluation">
            <div className="s-col-full s-content-center">
                Detailed Overall Evaluation Summary by Interviewer
            </div>
            <div className="s-col-5">
                Detailed write-up on overall assessment on technical capabilities, strengths, leadership
                qualities
                cultural fitment aspects, competency role, related and reasons for shortlisting:
                <div className="text-center">OR</div>
                Lack of technical skills, areas of weakness and/or reasons for not shortlisting the candidate:
            </div>
            <div className="s-col-7 s-content-center">
                <textarea
                    onChange={
                        (event: any) => {
                            updateProperty('detailedWriteUp', event.nativeEvent.target.value)
                        }
                    }
                    value={info.detailedWriteUp}
                />
            </div>
            <div className="s-col-5 s-content-center-vertical">
                Areas of improvement / Concerns:
            </div>
            <div className="s-col-7 s-content-center">
                <textarea
                    onChange={
                        (event: any) => {
                            updateProperty('areasOfImprovement', event.nativeEvent.target.value)
                        }
                    }
                    value={info.areasOfImprovement}
                />
            </div>
            <div className="s-col-full s-content-center">
                <textarea
                    placeholder="Please record any other role-related feedback on the candidate here"
                    onChange={
                        (event: any) => {
                            updateProperty('otherFeedback', event.nativeEvent.target.value)
                        }
                    }
                    value={info.otherFeedback}
                />
            </div>
        </div>
    );
}

export default OverallEvaluation;
