export interface IStoreState {
    form: {
        generalInfo: {
            interviewerName: string;
            interviewerCompetency: string;
            interviewerMid: string;
            candidateName: string;
            interviewMode: string;
            InterviewDate: Date;
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