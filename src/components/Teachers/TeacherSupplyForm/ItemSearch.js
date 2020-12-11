import React, { useContext }  from "react"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"

export const ItemSearch=()=>{
    const {searchTerms, setSearchTerms}=useContext(SupplyItemContext)
    return(
        <input onKeyUp={
            (keyEvent) => {
                setSearchTerms(keyEvent.target.value)
            }
        }placeholder="search for an item"></input>
    )
}