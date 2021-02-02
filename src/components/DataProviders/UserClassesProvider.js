import React, { useState } from "react"


export const UserClassesContext = React.createContext()


export const UserClassesProvider= (props) => {
    const [userClasses, setUserClasses] = useState([])


    const getUserClasses = () => {
        return fetch("https://supply-us-server.herokuapp.com/userClasses?_expand=classList")
            .then(res => res.json())
            .then(setUserClasses)
    }

    const addUserClasses = userClasses => {
        return fetch("https://supply-us-server.herokuapp.com/userClasses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userClasses)
        })
            .then(getUserClasses)
    }
    
    const deleteUserClasses = userClasses => {
        console.log(userClasses)
        return fetch(`https://supply-us-server.herokuapp.com/userClasses/${userClasses}`, {
            method: "DELETE"
        })
            .then(getUserClasses)
    }
    return (
        <UserClassesContext.Provider value={{
            userClasses, getUserClasses, addUserClasses, deleteUserClasses
        }}>
            {props.children}
        </UserClassesContext.Provider>
    )
}