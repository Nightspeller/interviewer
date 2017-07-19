import * as React from 'react';
import './forms-list.component.css';
import { IFormsListState, IDbEntry } from '../../types/types';

export interface IFormsListProps {
    formsList: IFormsListState;
    loadForms: any;
    deleteForm: any;
}

class FormsList extends React.Component<IFormsListProps, object> {
    componentWillMount() {
        this.props.loadForms();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.formsList.forms.map(
                        (dbEntry: IDbEntry) =>
                            <li key={dbEntry._id}>
                                {dbEntry.form.generalInfo.candidateName},
                                interviewed by {dbEntry.form.generalInfo.interviewerName} on
                                &nbsp;{dbEntry.form.generalInfo.interviewDate}
                                <button>Edit</button>
                                <a
                                    className="button"
                                    href={`http://gdcsandbox.mindtree.com:8015/api/interview/get-pdf/${dbEntry._id}`}
                                >
                                    Get PDF
                                </a>
                                <button onClick={() => this.props.deleteForm(dbEntry._id, dbEntry._rev)}>Delete</button>
                            </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default FormsList;
