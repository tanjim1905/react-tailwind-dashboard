import React, { useEffect, useState } from 'react';
import { CgNotes } from 'react-icons/cg';
import { IoIosArrowUp } from 'react-icons/io';

const UpcomingAppoints = () => {
    const [appoinments, setAppoinments] = useState([]);
    useEffect(() => {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
            .then(res => res.json())
            .then(data => setAppoinments(data[0]))
    }, [])
    return (
        <div>
            <div className='border-b border-gray-200'>
                <div className='flex justify-between p-4 items-center'>
                    <div className='capitalize font-semibold'><p>root canel treatment</p></div>
                    <div className='capitalize font-semibold bg-white p-3 rounded'><p className='flex items-center gap-x-1 text-gray-600'> <IoIosArrowUp className='text-xl' /> show previous treatment</p></div>
                </div>
            </div>
            <div className='h-[300px] scrollbar-hide overflow-auto'>
                <div className='relative'>
                    <div className="pl-20 pr-4 py-4 after:content-[''] after:absolute after:left-[6%] after:top-0  after:h-full after:w-1 after:bg-primary">
                        <div className='bg-white flex p-4 rounded-sm shadow-sm space-x-8 capitalize'>
                            <div className='w-1/2 flex'>
                                <div className='w-1/2 border-r border-gray-400'>
                                    <p className='text-2xl'>{appoinments["Upcoming Appointments"]?.Date}</p>
                                    <p className="text-gray-600">{appoinments["Upcoming Appointments"]?.Time}</p>
                                </div>
                                <div className='w-1/2 text-center border-r border-gray-400'>
                                    <p className='text-gray-600 text-sm'>treatment</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Treatment}</p>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-between'>
                                <div>
                                    <p className='text-gray-600 text-sm'>dentist</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Dentist}</p>
                                </div>
                                <div>
                                    <p className='text-gray-600 text-sm'>nurse</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Nurse}</p>
                                </div>
                                <div className='flex items-center gap-x-1 text-primary'>
                                    <CgNotes />
                                    <p className='font-bold'>note</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-6 h-6 absolute top-[38%] left-[35px] z-10 bg-white border-4 border-green-600 rounded-full'>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className="pl-20 pr-4 py-4 after:content-[''] after:absolute after:left-[6%] after:top-0  after:h-full after:w-1 after:bg-primary">
                        <div className='bg-white flex p-4 rounded-sm shadow-sm space-x-8 capitalize'>
                            <div className='w-1/2 flex'>
                                <div className='w-1/2 border-r border-gray-400'>
                                    <p className='text-2xl'>{appoinments["Upcoming Appointments"]?.Date}</p>
                                    <p className="text-gray-600">{appoinments["Upcoming Appointments"]?.Time}</p>
                                </div>
                                <div className='w-1/2 text-center border-r border-gray-400'>
                                    <p className='text-gray-600 text-sm'>treatment</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Treatment}</p>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-between'>
                                <div>
                                    <p className='text-gray-600 text-sm'>dentist</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Dentist}</p>
                                </div>
                                <div>
                                    <p className='text-gray-600 text-sm'>nurse</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Nurse}</p>
                                </div>
                                <div className='flex items-center gap-x-1 text-primary'>
                                    <CgNotes />
                                    <p className='font-bold'>note</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-6 h-6 absolute top-[38%] left-[35px] z-10 bg-white border-4 border-green-600 rounded-full'>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className="pl-20 pr-4 py-4 after:content-[''] after:absolute after:left-[6%] after:top-0  after:h-full after:w-1 after:bg-primary">
                        <div className='bg-white flex p-4 rounded-sm shadow-sm space-x-8 capitalize'>
                            <div className='w-1/2 flex'>
                                <div className='w-1/2 border-r border-gray-400'>
                                    <p className='text-2xl'>{appoinments["Upcoming Appointments"]?.Date}</p>
                                    <p className="text-gray-600">{appoinments["Upcoming Appointments"]?.Time}</p>
                                </div>
                                <div className='w-1/2 text-center border-r border-gray-400'>
                                    <p className='text-gray-600 text-sm'>treatment</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Treatment}</p>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-between'>
                                <div>
                                    <p className='text-gray-600 text-sm'>dentist</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Dentist}</p>
                                </div>
                                <div>
                                    <p className='text-gray-600 text-sm'>nurse</p>
                                    <p>{appoinments["Upcoming Appointments"]?.Nurse}</p>
                                </div>
                                <div className='flex items-center gap-x-1 text-primary'>
                                    <CgNotes />
                                    <p className='font-bold'>note</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-6 h-6 absolute top-[38%] left-[35px] z-10 bg-white border-4 border-green-600 rounded-full'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingAppoints;