import React, { useState,useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { examData,buttons } from '../../utility/Data';
import { getExamData,filterExamData } from '../../utility/examService';
import ExamCard from '../ExamCard';
import {ExamWraper, FilterWraper, FilterButton} from './styles';
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
    // debugger
    return (
        <>
        
        <FilterWraper>
        {buttons &&
            buttons.map((type, index) => (
              <>
                <FilterButton variant="info" key={index} value={type.value} onClick={handleFilter} >
                  {type.name}
                </FilterButton>
              </>
            ))}
        </FilterWraper>
        <ExamWraper >
            {filteredExamData &&
            filteredExamData.map((data, index) => (
                <ExamCard key={index} examData={data}/> 
            ))}
        </ExamWraper>
        </>
    );
}
export default Dashbaord;