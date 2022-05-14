import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const QuestionPaper = () => {
    const location = useLocation();
    
    return (
     <div>This is Question Paper for exam </div>
    );
}
export default QuestionPaper;