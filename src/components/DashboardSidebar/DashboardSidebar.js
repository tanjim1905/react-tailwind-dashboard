import React, { useEffect, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineDollarCircle, AiOutlineMenuUnfold, AiOutlineUser } from 'react-icons/ai';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FiCalendar, FiHelpCircle } from 'react-icons/fi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiListSettingsLine } from 'react-icons/ri';
import { Link, NavLink, Outlet } from 'react-router-dom';
import doctor from '../../util/assets/images/ClipartKey_3252751.png';
import logo from '../../util/assets/images/logo4.png';

const DashboardSidebar = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
            .then(res => res.json())
            .then(data => setDoctors(data[0]));
    }, [])
    return (
        <div className='flex'>
            <div className='w-[280px] h-screen sticky top-0 left-0'>
                <div className='space-y-3'>
                    <Link to="" className='flex items-center justify-between p-4'>
                        <div className='flex items-center gap-x-2'>
                            <div>
                                <img className='w-8' src={logo} alt="" />
                            </div>
                            <div className=''>
                                <p className='text-2xl font-bold'>Zendenta</p>
                                <p className='text-sm text-gray-900'>Cabut gigi tanpa sakit</p>
                            </div>
                        </div>
                        <div>
                            <AiOutlineMenuUnfold className='text-xl text-gray-900' />
                        </div>
                    </Link>
                    <NavLink to="over-view" className={(navInfo) => navInfo.isActive ? 'flex items-center gap-x-3 px-3 bg-primary py-4 border-b-[10px] border-blue-700 text-white' : 'flex items-center gap-x-3 p-4'}>
                        <MdOutlineRemoveRedEye className='text-2xl text-gray-700' />
                        <p className='capitalize font-bold'>overview</p>
                    </NavLink>
                    <NavLink to="Calendar" className={(navInfo) => navInfo.isActive ? 'flex items-center gap-x-3 px-3 text-white bg-primary py-4 border-b-[10px] border-blue-700' : 'flex items-center gap-x-3 p-4'}>
                        <FiCalendar className='text-xl text-gray-700' />
                        <p className='capitalize font-bold'>calendar</p>
                    </NavLink>
                    <NavLink to="patient-list" className={(navInfo) => navInfo.isActive ? 'flex items-center gap-x-3 px-3 text-white bg-primary py-4 border-b-[10px] border-blue-700' : 'flex items-center gap-x-3 p-4'}>
                        <AiOutlineUser className='text-2xl text-gray-700' />
                        <p className='capitalize font-bold'>patient list</p>
                    </NavLink>
                    <NavLink to="message" className={(navInfo) => navInfo.isActive ? 'flex items-center gap-x-3 px-3 bg-primary text-white py-4 border-b-[10px] border-blue-700' : 'flex items-center gap-x-3 p-4'}>
                        <BiMessageRoundedDetail className='text-2xl text-gray-700' />
                        <p className='capitalize font-bold'>message</p>
                    </NavLink>
                    <NavLink to="payment-information" className={(navInfo) => navInfo.isActive ? 'flex items-center gap-x-3 px-3 bg-primary text-white py-4 border-b-[10px] border-blue-700' : 'flex items-center gap-x-3 p-4'}>
                        <AiOutlineDollarCircle className='text-2xl text-gray-700' />
                        <p className='capitalize font-bold'>payment information</p>
                    </NavLink>
                    <NavLink to="settings" className={(navInfo) => navInfo.isActive ? 'flex items-center gap-x-3 px-3 bg-primary py-4 border-b-[10px] text-white border-blue-700' : 'flex items-center gap-x-3 p-4'}>
                        <RiListSettingsLine className='text-2xl text-gray-700' />
                        <p className='capitalize font-bold'>settings</p>
                    </NavLink>
                </div>
                <div className='fixed z-50 bottom-0 left-0 space-y-6'>
                    <div className='flex items-center gap-x-3 p-4'>
                        <FiHelpCircle className='text-2xl text-gray-700' />
                        <p className='capitalize'>help?</p>
                    </div>
                    <div className='flex items-center border-t border-gray-200'>
                        <div className='flex items-center gap-x-2 p-4'>
                            <div>
                                <div>
                                    <img className='w-12 h-12 rounded-full' src={doctor} alt="" />
                                </div>
                            </div>
                            <div>
                                <p className='capitalize font-bold'>{doctors.name}</p>
                                <p className='capitalize text-xs text-gray-600'>{doctors.specification}</p>
                            </div>
                        </div>
                        <div>
                            <AiOutlineArrowDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardSidebar;