import * as React from 'react';
import './header-and-menu.component.css';


export default function HeaderAndMenu() {
    return (
        <div>
            <header>
                <label htmlFor="drawer-checkbox" className="button drawer-toggle persistent"/>
            </header>
            <input type="checkbox" id="drawer-checkbox"/>
            <nav className="drawer persistent">
                <label htmlFor="drawer-checkbox" className="close"/>
                <a href="/new-form">New Form</a>
                <a href="/forms">Browse forms</a>
            </nav>
        </div>
    );
}
