import React from "react";
const Questions=({questions})=>{
return(
    <div style={{align:'left', textAlign:'left'}}>
        {
             questions.map((q,index) =>(
                <><h5>{index+1}) {q.statement}</h5>
                <table>
                    {
                        q.options.map(option =>(
                        <tr>
                            <td>
                                <input type="checkbox" name={option} /> {option}
                            </td>
                        </tr>
                        ))
                    }
                 </table>
                 <hr class="solid"></hr>
                 </>
         ))
         }
    </div>
    )
}
export default Questions;