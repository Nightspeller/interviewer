import { RouterState } from 'react-router-redux';

export interface IStoreState {
    formState: IFormState;
    formsListState: IFormsListState;
    router: RouterState;
}

export interface IFormState {
    form: IForm;
    _rev?: string;
    _id?: string;
}

export interface IForm {
    generalInfo: {
        interviewerName: string;
        interviewerCompetency: string;
        interviewerMid: string;
        candidateName: string;
        interviewMode: string;
        interviewDate: Date;
    };
    questionsAndAnswers: IQuestionAndAnswer[];
    technicalEvaluation: ITechSkillRating[];
    overallEvaluation: {
        detailedWriteUp: string;
        areasOfImprovement: string;
        otherFeedback: string;
    };
    grades: {
        communicationSkills: string;
        overallAssessment: string;
    };
    commitments: {
        location: string;
        workTime: string;
        projects: string;
        role: string;
        domain: string;
        skill: string;
    };
    selection: {
        reasons: string;
        selected: boolean;
    };
}

export interface IQuestionAndAnswer {
    question: string;
    answer: string;
}

export interface ITechSkillRating {
    skill: string;
    rating: string;
}

export interface IDbEntry {
    _id: string;
    _rev: string;
    form: IForm;
}

export interface IFormsListState {
    forms: IDbEntry[];
}