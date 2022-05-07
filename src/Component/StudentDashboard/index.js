import React, { useState,useEffect } from 'react';
import { Button, ToggleButton } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import { examData,buttons } from '../../utility/Data';
import { getExamData,filterExamData } from '../../utility/examService';
import ExamCard from '../ExamCard';
import {ExamWraper} from './styles';
const Dashbaord = (role) => {
    const location = useLocation(); 
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
        <ExamWraper >
            {filteredExamData &&
            filteredExamData.map((data) => (
                <ExamCard examData={data}/> 
            ))}
        </ExamWraper>
        </>
    );
}
export default Dashbaord;