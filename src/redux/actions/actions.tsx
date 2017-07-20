import { createActionThunk } from 'redux-thunk-actions';

export const UPDATE_FORM_PART = 'UPDATE_FORM_PART';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const PREPOPULATE_FORM = 'PREPOPULATE_FORM';
export const LOAD_FORMS = 'LOAD_FORMS';
export const DELETE_FORM = 'DELETE_FORM';
export const UPDATE_FORM = 'UPDATE_FORM';

import { IForm, IFormState } from '../../types/types';

export function updateFormPart(part: any, value: string | boolean | Date) {
    return {
        type: UPDATE_FORM_PART,
        payload: {part, value}
    };
}

export const submitForm = createActionThunk(
    SUBMIT_FORM,
    (form: IFormState) => {
        localStorage.setItem('form', JSON.stringify(form.form));
        return new Promise((resolve, reject) => {
            let myHeaders = new Headers({'Content-Type': 'application/json'});
            fetch('http://gdcsandbox.mindtree.com:8015/api/interview', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: myHeaders
            }).then((data) => resolve(data));
        });
    }
);

export const loadForms = createActionThunk(
    LOAD_FORMS,
    () => {
        return new Promise((resolve, reject) => {
            fetch('http://gdcsandbox.mindtree.com:8015/api/interview')
                .then(data => data.json().then( jsonData => resolve({forms: jsonData})));
        });
    }
);

export const deleteForm = createActionThunk(
    DELETE_FORM,
    (formId: string, formRev: string) => {
        return new Promise((resolve, reject) => {
            fetch(`http://gdcsandbox.mindtree.com:8015/api/interview/${formId}/${formRev}`, {method: 'DELETE'})
                .then(() => resolve(formId));
        });
    }
);

export const updateForm = createActionThunk(
    UPDATE_FORM,
    (form: IForm, formId: string, formRev: string) => {
        return new Promise((resolve, reject) => {
            let myHeaders = new Headers({'Content-Type': 'application/json'});
            fetch(`http://gdcsandbox.mindtree.com:8015/api/interview/${formId}/${formRev}`, {
                method: 'PUT',
                body: JSON.stringify({form: form}),
                headers: myHeaders
            }).then((data) => resolve(data));
        });
    }
);

export const prepopulateForm = createActionThunk(
    PREPOPULATE_FORM,
    (formId: string) => {
        return new Promise((resolve, reject) => {
            fetch(`http://gdcsandbox.mindtree.com:8015/api/interview/${formId}`)
                .then(data => data.json().then( jsonData => resolve(jsonData[0])));
        });
    }
);