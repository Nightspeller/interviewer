import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { formReducer } from './reducers/form.reducer';
import { IStoreState } from './types/types';

const store = createStore<IStoreState>(
    formReducer,
    {
        form: {
            generalInfo: {
                interviewerName: '',
                interviewerCompetency: '',
                interviewerMid: '',
                candidateName: '',
                interviewMode: '',
                InterviewDate: new Date()
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
    },
    composeWithDevTools(applyMiddleware())
);

import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
