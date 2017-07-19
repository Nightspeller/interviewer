import { Action } from 'redux-actions';

import { IFormState } from '../../types/types';
import { PREPOPULATE_FORM, SUBMIT_FORM, UPDATE_FORM_PART } from '../actions/actions';
const initialState = {
    form: {
        generalInfo: {
            interviewerName: '',
            interviewerCompetency: '',
            interviewerMid: '',
            candidateName: '',
            interviewMode: '',
            interviewDate: new Date()
        },
        questionsAndAnswers: [{
            question: '',
            answer: ''
        }],
        technicalEvaluation: [{
            skill: '',
            rating: ''
        }],
        overallEvaluation: {
            detailedWriteUp: '',
            areasOfImprovement: '',
            otherFeedback: ''
        },
        grades: {
            communicationSkills: '',
            overallAssessment: ''
        },
        commitments: {
            location: '',
            workTime: '',
            projects: '',
            role: '',
            domain: '',
            skill: ''
        },
        selection: {
            reasons: '',
            selected: false
        }
    }
};

export function formReducer(state: IFormState = initialState, action: Action<any>): IFormState {
    switch (action.type) {
        case PREPOPULATE_FORM:
            return {...state, form: action.payload};
        case UPDATE_FORM_PART:
            let updatedForm = {...state.form};
            updatedForm[action.payload.part] = action.payload.value;
            return {...state, form: updatedForm};
        case SUBMIT_FORM + '_SUCCEEDED':
            return state;
        default:
            return state;
    }
}
