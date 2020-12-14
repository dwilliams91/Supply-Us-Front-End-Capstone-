import React, { useContext } from "react"

export const CustomerIndividualClassTable=({myItem})=>{
    return(
        <>
        <tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.supplyItem.name}
            </td>
            <td className="tableColumn Number">
               {myItem.number}
            </td>
            <td className="tableColumn Description">
               {myItem.description}
            </td>
            
        </tr>
        </>
    )
}