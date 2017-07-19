import { Action } from 'redux-actions';

import { IFormsListState } from '../../types/types';
import { DELETE_FORM, LOAD_FORMS } from '../actions/actions';
const initialState = {
    forms: []
};

export function formsListReducer(state: IFormsListState = initialState, action: Action<any>): IFormsListState {
    console.log(action);
    switch (action.type) {
        case LOAD_FORMS + '_SUCCEEDED':
            return {forms: [...action.payload.forms]};
        case DELETE_FORM + '_SUCCEEDED':
            return {forms: state.forms.filter((elem) => elem._id !== action.payload)};
        default:
            return state;
    }
}
