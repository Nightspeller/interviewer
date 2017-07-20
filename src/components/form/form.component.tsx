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
import { IFormState } from '../../types/types';
import { RouterState } from 'react-router-redux';

export interface IFormComponentProps {
    formState: IFormState;
    router: RouterState;
    updateFormPart: any;
    submitForm: any;
    prepopulateForm: any;
    updateForm: any;
}

class From extends React.Component<IFormComponentProps , object> {

    componentWillMount() {
        const {prepopulateForm, router} = this.props;
        if (router.location && router.location.pathname.split('/')[2]) {
            prepopulateForm(router.location.pathname.split('/')[2]);
        }
    }

    submitClicked() {
        const {router, formState, submitForm, updateForm} = this.props;
        if (router.location && router.location.pathname.split('/')[2]) {
            updateForm(formState.form, formState._id, formState._rev);
        } else {
            submitForm({form: formState.form});
        }
    }

    render() {
        const {formState, updateFormPart} = this.props;
        let form = formState.form;
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
                            submitForm={() => this.submitClicked()}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default From;
