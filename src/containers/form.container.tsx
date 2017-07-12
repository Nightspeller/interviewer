import From from '../components/form/form.component';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = ({formReducer}: any) => {
    return {form: formReducer.form}
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateFormPart: (part: any, value: any) => dispatch(actions.updateFormPart(part, value)),
        submitForm: () => dispatch(actions.submitForm()),
        prepopulateForm: (form: any) => dispatch(actions.prepopulateForm(form))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(From);