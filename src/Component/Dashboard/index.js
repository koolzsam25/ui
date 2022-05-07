import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { STUDENT, TEACHER } from '../../utility/constants';
import StudentDashboard from '../StudentDashboard';
import TeacherDashboard from '../TeacherDashboard';
import {getToken} from '../../utility/login';


const Dashbaord = (role) => {
    const location = useLocation();
    let dashboard;
    if (location.state === STUDENT) {
        dashboard = <StudentDashboard />;
    } else if (location.state === TEACHER) {
        dashboard = <TeacherDashboard />;
    }
    return (
        <div>
            {dashboard}
        </div>
    );

}

export default Dashbaord;