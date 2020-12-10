import React from "react"

export const CustomerTable=({myItem})=>{
    const toggleDescriptionList=()=>{
    var x = document.getElementById(`descriptionList--${myItem.id}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    }

return(
<tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.name}
            </td>
            <td className="tableColumn Number">
               {myItem.number}
            </td>
            <td className="tableColumn DeleteButton">
                <ul id={`descriptionList--${myItem.id}`} style={{display:"none"}} >
                    {myItem.descriptions.map(singleDescription=><li> {singleDescription.description} for {singleDescription.className} </li>)}
                </ul>
               <button onClick={ ()=>
                toggleDescriptionList(myItem)
               }
               >see details</button>
            </td>
        </tr>
)
}