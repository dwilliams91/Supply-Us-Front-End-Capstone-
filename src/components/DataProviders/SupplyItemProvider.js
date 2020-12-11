import React, { useState } from "react"


export const SupplyItemContext = React.createContext()


export const SupplyItemsProvider = (props) => {

    const [SupplyItems, setSupplyItems] = useState([])
    const [searchTerms, setSearchTerms]=useState("")

    const getSupplyItems = () => {
        return fetch("http://localhost:8088/supplyItems")
            .then(res => res.json())
            .then(setSupplyItems)
    }



    return (
        <SupplyItemContext.Provider value={{
            SupplyItems, SupplyItemsProvider, getSupplyItems, searchTerms, setSearchTerms
        }}>
            {props.children}
        </SupplyItemContext.Provider>
    )
}