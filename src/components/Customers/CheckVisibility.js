import React from "react"

export const CheckVisibility=({visbilityCheck, myItem})=>{
    if(visbilityCheck){
        return (
            <ul>
                        {myItem.descriptions.map(singleDescription => <li key={singleDescription.id}> {singleDescription.description} for <strong>{singleDescription.className}</strong> </li>)}
                    </ul>
        )
    } else {
        return(
         <></>
    )}
}