import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import { examData,buttons } from '../../utility/Data';
import ExamCard from '../ExamCard';
const Dashbaord = (role) => {
    const location = useLocation();
    console.log("## ", JSON.stringify(location));
    function getExamData() {
        const dataList = examData;
        return dataList;
      }
      function filterExamData(filterType) {
        let filtredExamData ;
        switch(filterType)
        { 
            case 'next7days':
                filtredExamData = getExamData().filter(_=>new Date(_.Expiry).getDate()- new Date().getDate() <= 7 && new Date(_.Expiry).getDate()- new Date().getDate() > 0);
                break;
            case 'nextMonths':
                filtredExamData = getExamData().filter(_=>new Date(_.Expiry).getDate() - new Date().getDate() <= 30 && new Date(_.Expiry).getDate()- new Date().getDate() > 0);
                break;
            case 'pastExams':
                filtredExamData = getExamData().filter(_=>new Date(_.Expiry) < new Date());
                break;
            default:
                filtredExamData = getExamData();
                break;
            
        }
        return filtredExamData;
      }
    
    const [filteredExamData, setFilteredData] = useState(null);
    useEffect(() => {
        setFilteredData(getExamData());
      }, []);
    
    function handleFilter(e) {
        let filterType = e.target.value;
        filterType !== "all"
          ? setFilteredData(filterExamData(filterType))
          : setFilteredData(getExamData());
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