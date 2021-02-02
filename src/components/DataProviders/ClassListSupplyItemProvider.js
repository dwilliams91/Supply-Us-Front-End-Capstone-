import React, { useState } from "react"


export const ClassListSupplyItemContext = React.createContext()


export const ClassListSupplyItemProvider= (props) => {

    const [classListSupplyItem, setClassListSupplyItem] = useState([])

    const getClassListSupplyItem = () => {
        return fetch("https://supply-us-server.herokuapp.com/ClassListSupplyItems?_expand=supplyItem&_expand=classList")
            .then(res => res.json())
            .then(setClassListSupplyItem)
    }

    const addClassListSupplyItem = classListsSupplyItem => {
        return fetch("https://supply-us-server.herokuapp.com/ClassListSupplyItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(classListsSupplyItem)
        })
            .then(getClassListSupplyItem)
    }
    const deleteItem = ClassItemSupplyListId => {
        console.log(ClassItemSupplyListId)
        return fetch(`https://supply-us-server.herokuapp.com/ClassListSupplyItems/${ClassItemSupplyListId}`, {
            method: "DELETE"
        })
            .then(getClassListSupplyItem)
    }
    return (
        <ClassListSupplyItemContext.Provider value={{
            ClassListSupplyItemProvider, classListSupplyItem, getClassListSupplyItem, addClassListSupplyItem, deleteItem
        }}>
            {props.children}
        </ClassListSupplyItemContext.Provider>
    )
}