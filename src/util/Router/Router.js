import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MedicalRecords from '../../components/Appoinments/MedicalRecords';
import PastAppoinments from '../../components/Appoinments/PastAppoinments';
import UpcomingAppoints from '../../components/Appoinments/UpcomingAppoints';
import Calendar from '../../components/Calendar/Calendar';
import DashboardContainer from '../../components/DashboardContainer/DashboardContainer';
import Message from '../../components/Message/Message';
import Overview from '../../components/Overview/Overview';
import PatientList from '../../components/PatientList/PatientList';
import PaymentInformation from '../../components/PaymentInformation/PaymentInformation';
import Settings from '../../components/Settings/Settings';
import Dashboard from '../../pages/Dashboard/Dashboard';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} >
                <Route path='' element={<DashboardContainer />} />
                <Route path='over-view' element={<Overview />} />
                <Route path='message' element={<Message />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='payment-information' element={<PaymentInformation />} />
                <Route path='settings' element={<Settings />} />
                <Route path='patient-list' element={<PatientList />} >
                    <Route path='' element={<UpcomingAppoints />} />
                    <Route path='past-appoinments' element={<PastAppoinments />} />
                    <Route path='medical-records' element={<MedicalRecords />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;