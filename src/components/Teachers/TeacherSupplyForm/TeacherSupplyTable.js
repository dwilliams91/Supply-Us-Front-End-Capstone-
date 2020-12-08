import React from "react"

export const TeacherSupplyTable=(myItem)=>{
    console.log(myItem.myItem)
    let myTest=myItem.myItem.description
    return(
        <>
        <tr className="TableRow">
            
            <td>
                {myTest}
            </td>
            <td>
               <p> hi</p> 
            </td>
        </tr>
        </>
    )
}