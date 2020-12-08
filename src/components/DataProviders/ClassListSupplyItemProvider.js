import React, { useState } from "react"


export const ClassListSupplyItemContext = React.createContext()


export const ClassListSupplyItemProvider= (props) => {

    const [classListSupplyItem, setClassListSupplyItem] = useState([])

    const getClassListSupplyItem = () => {
        return fetch("http://localhost:8088/ClassListSupplyItems")
            .then(res => res.json())
            .then(setClassListSupplyItem)
    }

    const addClassListSupplyItem = classListsSupplyItem => {
        return fetch("http://localhost:8088/ClassListSupplyItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(classListsSupplyItem)
        })
            .then(getClassListSupplyItem)
    }
    return (
        <ClassListSupplyItemContext.Provider value={{
            ClassListSupplyItemProvider, classListSupplyItem, getClassListSupplyItem, addClassListSupplyItem
        }}>
            {props.children}
        </ClassListSupplyItemContext.Provider>
    )
}