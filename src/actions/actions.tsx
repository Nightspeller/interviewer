export const UPDATE_FORM_PART = 'UPDATE_FORM_PART';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const PREPOPULATE_FORM = 'PREPOPULATE_FORM';

export function updateFormPart(part: any, value: any) {
    return {
        type: UPDATE_FORM_PART,
        payload: {part, value}
    };
}

export function submitForm() {
    return {
        type: SUBMIT_FORM
    };
}

export function prepopulateForm(form: any) {
    return {
        type: PREPOPULATE_FORM,
        payload: form
    };
}
