import * as React from 'react';
import './header-and-menu.component.css';
import { Link } from 'react-router-dom';

export default function HeaderAndMenu() {
    return (
        <div className="hide_from_print">
            <header>
                <label htmlFor="drawer-checkbox" className="button drawer-toggle persistent"/>
                <label htmlFor="drawer-checkbox" className="element-center button">Interviewer for Mindtree</label>
            </header>
            <input type="checkbox" id="drawer-checkbox"/>
            <nav className="drawer persistent">
                <label htmlFor="drawer-checkbox" className="close"/>
                <Link to="/form">New Form</Link>
                <Link to="/">Browse forms</Link>
            </nav>
        </div>
    );
}
