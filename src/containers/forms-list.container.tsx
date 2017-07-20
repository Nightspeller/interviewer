import FormsList from '../components/forms-list/forms-list.component';
import * as actions from '../redux/actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = ({formsListState}: any) => {
    return {formsList: formsListState};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadForms: () => dispatch(actions.loadForms()),
        deleteForm: (id: string, rev: string) => dispatch(actions.deleteForm(id, rev))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormsList);