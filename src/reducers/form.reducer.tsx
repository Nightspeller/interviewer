import { IStoreState } from '../types/types';
import { PREPOPULATE_FORM, SUBMIT_FORM, UPDATE_FORM_PART } from '../actions/actions';

export function formReducer(state: IStoreState, action: any): IStoreState {
    console.log(action);
    switch (action.type) {
        case PREPOPULATE_FORM:
            return {...state, form: action.payload};
        case UPDATE_FORM_PART:
            let updatedForm = {...state.form};
            updatedForm[action.payload.part] = action.payload.value;
            return {...state, form: updatedForm};
        case SUBMIT_FORM:
            localStorage.setItem('form', JSON.stringify(state.form));
            return {...state};
        default:
            return state;
    }
}