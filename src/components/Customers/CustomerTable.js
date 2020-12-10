import React from "react"

export const CustomerTable=({myItem})=>{

return(
<tr className="TableRow">
            <td className="tableColumn Name">
                Item
            </td>
            <td className="tableColumn Number">
               Number
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