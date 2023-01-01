import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dahboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='md:flex relative min-h-screen'>
            <div>
                <Sidebar />
            </div>
            <div className='flex-1 bg-slate-400'>

                <Outlet></Outlet>
                <div>
                    <h1>content</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;