import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import { examData,buttons } from '../../utility/Data';
import { getExamData,filterExamData } from '../../service/examService';
import ExamCard from '../ExamCard';
const Dashbaord = (role) => {
    const location = useLocation();
    console.log("## ", JSON.stringify(location));  
    const [filteredExamData, setFilteredData] = useState(null);
    useEffect(() => {
        setFilteredData(getExamData(examData));
    }, []);
    function handleFilter(e) {
        let filterType = e.target.value;
        filterType !== "all"
          ? setFilteredData(filterExamData(filterType,examData))
          : setFilteredData(getExamData(examData));
    }
    return (
        <>
        <div style={{ display: 'flex' , margin:'10px'}}>
        {buttons &&
            buttons.map((type, index) => (
              <>
                <Button variant="info" style={{ margin:'10px', borderRadius:'5px'}} key={index} value={type.value} onClick={handleFilter} >
                  {type.name}
                </Button>
              </>
            ))}
        </div>
        <div style={{ display: 'flex'}}>
            {filteredExamData &&
            filteredExamData.map((data) => (
                <ExamCard examData={data}/> 
            ))}
        </div>
        </>
    );
}
export default Dashbaord;