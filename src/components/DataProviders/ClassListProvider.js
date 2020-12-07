import React, { useState } from "react"


export const ClassListContext = React.createContext()


export const ClassListProvider = (props) => {

    const [classLists, setClassLists] = useState([])

    const getClassLists = () => {
        return fetch("http://localhost:8088/classLists")
            .then(res => res.json())
            .then(setClassLists)
    }


    return (
        <ClassListContext.Provider value={{
            ClassListProvider, classLists, getClassLists
        }}>
            {props.children}
        </ClassListContext.Provider>
    )
}