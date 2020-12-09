import React, { useState } from "react"


export const UserClassesContext = React.createContext()


export const UserClassesProvider= (props) => {
    const [userClasses, setUserClasses] = useState([])


    const getUserClasses = () => {
        return fetch("http://localhost:8088/userClasses?_expand=classList")
            .then(res => res.json())
            .then(setUserClasses)
    }

    const addUserClasses = userClasses => {
        return fetch("http://localhost:8088/userClasses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userClasses)
        })
            .then(getUserClasses)
    }
  
    return (
        <UserClassesContext.Provider value={{
            userClasses, getUserClasses, addUserClasses
        }}>
            {props.children}
        </UserClassesContext.Provider>
    )
}