import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { STUDENT, TEACHER } from '../../utility/constants';
import StudentDashboard from '../StudentDashboard';
import TeacherDashboard from '../TeacherDashboard';


const Dashbaord = (role) => {
    const location = useLocation();
    console.log("## ", JSON.stringify(location));
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