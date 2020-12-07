import React, { useState } from "react"


export const SupplyItemContext = React.createContext()


export const SupplyItemsProvider = (props) => {

    const [SupplyItems, setSupplyItems] = useState([])

    const getSupplyItems = () => {
        return fetch("http://localhost:8088/supplyItems")
            .then(res => res.json())
            .then(setSupplyItems)
    }


    return (
        <SupplyItemContext.Provider value={{
            SupplyItems, SupplyItemsProvider, getSupplyItems
        }}>
            {props.children}
        </SupplyItemContext.Provider>
    )
}