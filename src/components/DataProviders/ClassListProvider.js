import React, { useState } from "react"


export const ClassListContext = React.createContext()


export const ClassListProvider = (props) => {

    const [classLists, setClassLists] = useState([])

    const getClassLists = () => {
        return fetch("https://supply-us-server.herokuapp.com/classLists")
            .then(res => res.json())
            .then(setClassLists)
    }

    const addClassList = classLists => {
        console.log(classLists)
        return fetch("https://supply-us-server.herokuapp.com/classLists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(classLists)
        })
            .then(getClassLists)
    }
    const deleteClassList = classLists => {
        console.log(classLists)
        return fetch(`https://supply-us-server.herokuapp.com/classLists/${classLists}`, {
            method: "DELETE"
        })
            .then(getClassLists)
    }

    return (
        <ClassListContext.Provider value={{
            ClassListProvider, classLists, getClassLists, addClassList, deleteClassList
        }}>
            {props.children}
        </ClassListContext.Provider>
    )
}