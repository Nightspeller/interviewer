import * as React from 'react';
import './App.css';
import HeaderAndMenu from '../../components/header-and-menu/header-and-menu.component';

export default function App({ children }: any) {
    return (
        <div>
            <HeaderAndMenu />
            {children}
        </div>
    )
}