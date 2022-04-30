import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';


const Dashbaord = (role) => {
    const location = useLocation();
    console.log("## ", JSON.stringify(location));

    return (
        <div>
            <div>
                <label>Student Dashbaord</label>
            </div>
            
        </div>

    );

}

export default Dashbaord;