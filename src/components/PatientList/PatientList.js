import React, { useEffect, useState } from 'react';
import { AiFillPrinter, AiOutlineFileAdd, AiOutlineFileText } from 'react-icons/ai';
import { BiEdit, BiSearch, BiUser } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { RiUserFill } from 'react-icons/ri';
import Appointments from '../Appoinments/Appointments';

const PatientList = () => {
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
            .then(res => res.json())
            .then(data => setPatient(data[0]));
    }, [])

    console.log(patient["Phone Number"]);
    return (
        <div className='w-full bg-blue-50'>
            <div className='w-full flex justify-between items-center px-5 py-4 border-b border-gray-300'>
                <div className='flex items-center'>
                    <RiUserFill className='text-4xl text-blue-700' />
                    <p className='text-2xl font-bold capitalize'>diane cooper</p>
                </div>
                <div className='flex gap-x-4'>
                    <div className='flex items-center border border-gray-200 px-4 gap-x-2 py-2 rounded-full'>
                        <BiSearch className='text-2xl text-gray-400' />
                        <input className='bg-transparent focus:outline-none' type="text" name="" id="" placeholder='Search' />
                    </div>
                    <div className='w-12 h-12 bg-blue-600 flex justify-center items-center rounded-full'>
                        <FiPlus className='text-white text-3xl' />
                    </div>
                    <div className='relative'>
                        <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full'>
                            <IoMdNotifications className='text-3xl text-gray-400' />
                        </div>
                        <div className='w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-5 py-4'>
                <div className='flex items-center gap-x-3'>
                    <p className='capitalize text-xl text-primary'>patient list</p>
                    <MdOutlineArrowForwardIos className='text-2xl text-gray-400' />
                    <p className='capitalize text-xl text-gray-400'>{patient.name}</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div className='w-12 h-12 bg-white flex justify-center items-center rounded'>
                        <AiFillPrinter className='text-2xl text-gray-400' />
                    </div>
                    <div className='flex items-center h-12 gap-x-2 bg-white px-4'>
                        <BiEdit className='text-2xl text-gray-400' />
                        <p className='capitalize font-semibold text-gray-400'>edit patient</p>
                    </div>
                </div>
            </div>

            <div className='p-6'>
                <div className='w-full flex gap-x-5'>
                    <div className='w-8/12'>
                        <div className='flex gap-x-2'>
                            <div className='w-4/12 p-5 bg-white'>
                                <div className='w-full py-3'>
                                    <img className='w-36 h-36 rounded-full mx-auto' src="https://images.squarespace-cdn.com/content/v1/5404a441e4b0a7034afcd1fc/1594234616309-CURUWW2MHFT9JZ914F20/Sherman+Strategies_Adrienne+Battistella+Photography+2016_0004.jpg?format=2500w" alt="" />
                                </div>
                                <div className='text-center'>
                                    <p className='capitalize text-2xl font-bold'>{patient.name}</p>
                                    <p className='text-gray-400'>{patient["e-email"]}</p>
                                </div>
                                <div className='flex py-6'>
                                    <div className='w-6/12 text-center border-r border-gray-300'>
                                        <p className='text-xl font-semibold'>{patient.Past}</p>
                                        <p className='text-sm capitalize text-gray-500'>past</p>
                                    </div>
                                    <div className='w-6/12 text-center'>
                                        <p className='text-xl font-semibold'>{patient.Upcoming}</p>
                                        <p className='text-sm capitalize text-gray-500'>upcoming</p>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <button className='w-full py-2 rounded font-semibold capitalize text-center border border-gray-300'>send message</button>
                                </div>
                            </div>
                            <div className='w-8/12 bg-white grid grid-cols-3 gap-5 p-10 text-sm'>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>gender</p>
                                    <p className='capitalize'>{patient.Gender}</p>
                                </div>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>birthday</p>
                                    <p className='capitalize'>{patient["Birthday"]}</p>
                                </div>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>phone number</p>
                                    <p className='capitalize'>{patient["Phone Number"]}</p>
                                </div>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>street address</p>
                                    <p className='capitalize'>{patient["Street Address"]}</p>
                                </div>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>city</p>
                                    <p className='capitalize'>cilacap</p>
                                </div>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>zip code</p>
                                    <p className='capitalize'>{patient["ZIP Code"]}</p>
                                </div>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>member status</p>
                                    <p className='capitalize'>{patient["Member Status"]}</p>
                                </div>
                                <div className='py-4 border-b border-gray-300'>
                                    <p className='capitalize text-gray-500'>register date</p>
                                    <p className='capitalize'>{patient["Register Date"]}</p>
                                </div>
                            </div>
                        </div>
                        <Appointments />
                    </div>

                    <div className='w-4/12 space-y-6'>
                        <div className='bg-white p-2'>
                            <div className='flex justify-between p-5'>
                                <p>Notes</p>
                                <p className='text-primary font-bold'>See all</p>
                            </div>

                            <div className='bg-blue-50 p-5'>
                                <div className='h-[200px] space-y-4'>
                                    <p> - This patient is lorem ipsum dolor sit amet</p>
                                    <p> - Lorem ipsum dolor sit amet</p>
                                    <p> - has alergic history with Cataflam</p>
                                </div>
                                <div className='flex justify-end'>
                                    <button className='bg-primary text-white px-4 py-2.5 rounded'>save note</button>
                                </div>
                            </div>
                            <div className='space-y-2 p-6'>
                                <p>Lorem ipsum dolor sit amet</p>
                                <div className='flex justify-between items-cente'>
                                    <p className='capitalize flex justify-between items-center gap-x-1'><BiUser className='text-primary' /> drg. mega nanade</p>
                                    <p>20 Nov 19</p>
                                </div>
                            </div>
                        </div>

                        <div className='p-5 pb-10 rounded-lg bg-white'>
                            <div className='flex justify-between py-5'>
                                <p className='capitalize'>files/documents</p>
                                <p className='capitalize flex items-center gap-x-1 font-bold text-primary'> <AiOutlineFileAdd className='text-2xl text-gray-600' /> add files</p>
                            </div>
                            <div>
                                <div className='flex justify-between items-center p-5 shadow'>
                                    <div className='flex items-center gap-x-3'>
                                        <div>
                                            <AiOutlineFileText className='text-2xl text-gray-600' />
                                        </div>
                                        <div className='capitalize'>
                                            check up result.pdf
                                        </div>
                                    </div>
                                    <div>
                                        <p>123kb</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-5 shadow'>
                                    <div className='flex items-center gap-x-3'>
                                        <div>
                                            <AiOutlineFileText className='text-2xl text-gray-600' />
                                        </div>
                                        <div className='capitalize'>
                                            dental x-ray result2.pdf
                                        </div>
                                    </div>
                                    <div>
                                        <p>123kb</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-5 shadow'>
                                    <div className='flex items-center gap-x-3'>
                                        <div>
                                            <AiOutlineFileText className='text-2xl text-gray-600' />
                                        </div>
                                        <div className='capitalize'>
                                            medical prescriptions.pdf
                                        </div>
                                    </div>
                                    <div>
                                        <p>87kb</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-5 shadow'>
                                    <div className='flex items-center gap-x-3'>
                                        <div>
                                            <AiOutlineFileText className='text-2xl text-gray-600' />
                                        </div>
                                        <div className='capitalize'>
                                            check up result.pdf
                                        </div>
                                    </div>
                                    <div>
                                        <p>87kb</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientList;