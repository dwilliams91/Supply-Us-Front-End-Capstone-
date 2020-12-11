import React from "react"

export const CheckVisibility=({visbilityCheck})=>{
    if(visbilityCheck){
        return (
            <p>This should display</p>
        )
    } else {
        return(
         <></>
    )}
}