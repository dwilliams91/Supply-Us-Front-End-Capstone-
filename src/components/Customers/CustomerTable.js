import React, {useEffect, useState} from "react"
import { CheckVisibility } from "./CheckVisibility";
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
    const [visbility, setVisibility] = useState(true)

    
    

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

                    <ul id={`descriptionList--${myItem.id}`} style={{ display: "none" }} >
                        {myItem.descriptions.map(singleDescription => <li key={singleDescription.id}> {singleDescription.description} for <strong>{singleDescription.className}</strong> </li>)}
                    </ul>
                    <button onClick={() =>
                        toggleDescriptionList(myItem)
                    }
                    >see details for {myItem.name}</button>
                    <CheckVisibility visbilityCheck={visbility}/>
                </td>
            </tr>
        </>
    )
}