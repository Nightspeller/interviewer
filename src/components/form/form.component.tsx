import * as React from 'react';
import './form.component.css';
import InterviewGuidelines from './interview-guidelines/interview-guidelines.component';
import GeneralInfo from './general-info/general-info.component';
import QuestionsAndAnswers from './questions-and-answers/questions-and-answers.component';
import TechnicalEvaluation from './technical-evaluation/technical-evaluation.component';
import OverallEvaluation from './overall-evaluation/overall-evaluation.component';
import Grades from './grades/grades.component';
import Commitments from './commitments/commitments.component';
import SelectionAndSubmission from './selection-and-submission/selection-and-submission.component';
import { IForm } from '../../types/types';

export interface IFormComponentProps {
    form: IForm;
    updateFormPart: any;
    submitForm: any;
    prepopulateForm: any;
}

class From extends React.Component<IFormComponentProps , object> {
    componentWillMount() {
        const {prepopulateForm} = this.props;
        if (localStorage.getItem('form')) {
            prepopulateForm(JSON.parse(localStorage.getItem('form') || '{}'));
        }
    }

    render() {
        const {form, updateFormPart, submitForm} = this.props;
        return (
            <form className="form">
                <div className="s-grid">
                    <div className="s-col-full s-content-center s-content-vertical">
                        TECHNICAL EVALUATION FORM
                        <InterviewGuidelines/>
                    </div>

                    <div className="s-col-full">
                        <GeneralInfo
                            info={form.generalInfo}
                            callback={(generalInfo: any) => updateFormPart('generalInfo', generalInfo)}
                        />
                    </div>

                    <div className="s-col-full">
                        <QuestionsAndAnswers
                            info={form.questionsAndAnswers}
                            callback={(questionsAndAnswers: any) =>
                                updateFormPart('questionsAndAnswers', questionsAndAnswers)}
                        />
                    </div>

                    <div className="s-col-full">
                        <TechnicalEvaluation
                            info={form.technicalEvaluation}
                            callback={(technicalEvaluation: any) =>
                                updateFormPart('technicalEvaluation', technicalEvaluation)}
                        />
                    </div>

                    <div className="s-col-full">
                        <OverallEvaluation
                            info={form.overallEvaluation}
                            callback={(overallEvaluation: any) =>
                                updateFormPart('overallEvaluation', overallEvaluation)}
                        />
                    </div>

                    <div className="s-col-full">
                        <Grades
                            info={form.grades}
                            callback={(grades: any) => updateFormPart('grades', grades)}
                        />
                    </div>

                    <div className="s-col-full">
                        <Commitments
                            info={form.commitments}
                            callback={(commitments: any) => updateFormPart('commitments', commitments)}
                        />
                    </div>

                    <div className="s-col-full">
                        <SelectionAndSubmission
                            info={form.selection}
                            callback={(selection: any) => updateFormPart('selection', selection)}
                            submitForm={() => submitForm({form})}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default From;
