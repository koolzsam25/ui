import React from "react";
const Questions=({questions})=>{
return(
    <ul className="list-group mb-4">
        {
            questions.map(q=>(
                <li key={q} className="list-group-item" >{q}
                </li>
            ))
        }
    </ul>
)
}
export default Questions;