import React, {useEffect, useState} from "react"
import { ItemDetails } from "./ItemDetails";
import "./Customer.css"
import {Table} from "react-bootstrap"
// this is to toggle the display
export const CustomerTable = ({ myItem }) => {
    const [packageType, setPackageType]=useState("")
    const toggleDescriptionList = () => {
       if (visbility){
           setVisibility(false)
       } else{
           setVisibility(true)
       }
    }
    const [visbility, setVisibility] = useState(false)

    
    useEffect(()=>{
        if (myItem.packaging){
            setPackageType(" packs")
        }
    },[])
    return (
        <>

            <tr className="TableRow">
                <td  colSpan="1" className="tableColumn Name">
                    {myItem.name}
                </td>
                <td  colSpan="1" className="tableColumn Number">
     {myItem.number} {packageType}
                </td>
                <td colSpan="3" className="tableColumn DeleteButton">
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