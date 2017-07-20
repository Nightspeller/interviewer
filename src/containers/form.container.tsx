import From from '../components/form/form.component';
import * as actions from '../redux/actions/actions';
import { connect } from 'react-redux';

import { IFormState, IStoreState } from '../types/types';
import { Dispatch } from 'react-redux';
import { Action } from 'redux-actions';

const mapStateToProps = ({formState, router}: IStoreState) => {
    return {formState, router};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
        updateFormPart: (part: {[key: string]: string}, value: string | boolean | Date) =>
            dispatch(actions.updateFormPart(part, value)),
        submitForm: (data: IFormState) => dispatch(actions.submitForm(data)),
        prepopulateForm: (form: any) => dispatch(actions.prepopulateForm(form)),
        updateForm: (form: any, _id: string, _rev: string) => dispatch(actions.updateForm(form, _id, _rev)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(From);