import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Form,Row,Col,Button ,input} from "react-bootstrap";
import { flex } from '@xstyled/styled-components';

const AddQuestion = (role) => {
    const location = useLocation();
    return (
        <>
        <div style={{border: '1px solid black',borderRadius:'5px', marginTop:'10px', marginBottom:'10px' , paddingLeft:'5px'}}>
        <div  contentEditable={true} suppressContentEditableWarning={true} >Question statement here</div>
        <div style={{display:flex }}>
            <input style={{marginRight:'20px'}} type="radio" name="options"></input>
            <label  contentEditable={true} suppressContentEditableWarning={true} >Option 1</label>
        </div>
        <div style={{display:flex }}>
            <input style={{marginRight:'20px'}} type="radio" name="options"></input>
            <label contentEditable={true} suppressContentEditableWarning={true} >Option 2</label>
        </div>
        <div style={{display:flex }}>
            <input style={{marginRight:'20px'}} type="radio" name="options"></input>
            <label contentEditable={true} suppressContentEditableWarning={true} >Option 3</label>
        </div>
        <div style={{display:flex }}>
            <input style={{marginRight:'20px'}} type="radio" name="options"></input>
            <label contentEditable={true} suppressContentEditableWarning={true} >Option 4</label>
        </div>
        </div>
        </>
    );

}

export default AddQuestion;
