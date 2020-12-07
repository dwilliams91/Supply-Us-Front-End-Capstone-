import React, { useState } from "react"


export const SupplyTypeContext = React.createContext()


export const SupplyTypeProvider = (props) => {

    const [SupplyTypes, setSupplyType] = useState([])

    const getSupplyTypes = () => {
        return fetch("http://localhost:8088/supplyType")
            .then(res => res.json())
            .then(setSupplyType)
    }


    return (
        <SupplyTypeContext.Provider value={{
            SupplyTypeProvider, SupplyTypes, getSupplyTypes
        }}>
            {props.children}
        </SupplyTypeContext.Provider>
    )
}