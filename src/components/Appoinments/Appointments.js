import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Appointments = () => {
    return (
        <div className='mt-5'>
            <div className='bg-white p-6 rounded-xl'>
                <div className='flex bg-blue-50 p-2 rounded-xl gap-x-2'>
                    <NavLink to="" className={(navInfo) => navInfo.isActive ? 'px-5 py-3 rounded-lg bg-white text-blue-700 font-semibold' : 'bg-transparent px-5 py-3 rounded-lg text-gray-700'}>
                        <p className='capitalize text-sm'>upcoming appointments</p>
                    </NavLink>
                    <NavLink to="past-appoinments" className={(navInfo) => navInfo.isActive ? 'px-5 py-3 rounded-lg bg-white text-blue-700 font-semibold' : 'bg-transparent px-5 py-3 rounded-lg text-gray-700'}>
                        <p className='capitalize text-sm'>post appointments</p>
                    </NavLink>
                    <NavLink to="medical-records" className={(navInfo) => navInfo.isActive ? 'px-5 py-3 rounded-lg bg-white text-blue-700 font-semibold' : 'bg-transparent px-5 py-3 rounded-lg text-gray-700'}>
                        <p className='capitalize text-sm'>medical records</p>
                    </NavLink>
                </div>
                <div className='mt-6 bg-blue-50 rounded-lg'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Appointments;