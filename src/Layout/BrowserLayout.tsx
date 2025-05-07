import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const BrowserLayout = () => {
    return (
        <div className="browse-layout">
            <Header />
            <Outlet />
        </div>
    );
};

export default BrowserLayout;
