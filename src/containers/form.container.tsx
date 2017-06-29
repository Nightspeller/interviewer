import From from '../components/form/form.component';
import * as actions from '../actions/actions';
import { IStoreState } from '../types/types';
import { connect } from 'react-redux';

const mapStateToProps = ({form}: IStoreState) => {
    return {form}
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateFormPart: (part: any, value: any) => dispatch(actions.updateFormPart(part, value)),
        submitForm: () => dispatch(actions.submitForm()),
        prepopulateForm: (form: any) => dispatch(actions.prepopulateForm(form))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(From);