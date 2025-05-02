import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout: React.FC = () => {
    return (
        <div className="dashboard-layout" style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <div className="main-content flex flex-col" style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
