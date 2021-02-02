import React, { useState } from "react"


export const UserTypeContext = React.createContext()


export const UserTypeProvider= (props) => {
    const [userTypes, setUserType] = useState([])


    const getUserTypes = () => {
        return fetch("https://supply-us-server.herokuapp.com/userType")
            .then(res => res.json())
            .then(setUserType)
    }
    
    return (
        <UserTypeContext.Provider value={{
            userTypes, getUserTypes, UserTypeProvider
        }}>
            {props.children}
        </UserTypeContext.Provider>
    )
}