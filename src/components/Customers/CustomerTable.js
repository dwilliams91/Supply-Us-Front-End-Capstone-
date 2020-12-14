import React, {useEffect, useState} from "react"
import { ItemDetails } from "./ItemDetails";
import "./Customer.css"
// this is to toggle the display
export const CustomerTable = ({ myItem }) => {
    
    const toggleDescriptionList = () => {
       if (visbility){
           setVisibility(false)
       } else{
           setVisibility(true)
       }
    }
    const [visbility, setVisibility] = useState(false)

    
    

    return (
        <>

            <tr className="TableRow">
                <td className="tableColumn Name">
                    {myItem.name}
                </td>
                <td className="tableColumn Number">
                    {myItem.number}
                </td>
                <td className="tableColumn DeleteButton">
                    <button onClick={() =>
                        toggleDescriptionList(myItem)
                    }
                    >see details for {myItem.name}</button>
                    <ItemDetails visbilityCheck={visbility} myItem={myItem}/>
                </td>
            </tr>
        </>
    )
}