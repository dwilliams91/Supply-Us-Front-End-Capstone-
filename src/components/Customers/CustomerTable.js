import React from "react"

export const CustomerTable=({myItem})=>{

return(
<tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.name}
            </td>
            <td className="tableColumn Number">
               {myItem.number}
            </td>
            <td className="tableColumn DeleteButton">
               <button onClick={ ()=>
                console.log("description button")
               }
               >see details</button>
            </td>
        </tr>
)
}