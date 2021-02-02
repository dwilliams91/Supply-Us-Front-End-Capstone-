import React, { useState } from "react"


export const TeacherContext = React.createContext()


export const TeacherProvider = (props) => {

    const [users, setUsers] = useState([])
    const [Teachers, setTeachers] = useState([])

    const getTeachers = () => {
        
        return fetch("https://supply-us-server.herokuapp.com/users")
            .then(res => res.json())
            .then(myArray=>myArray.filter(singleItem=>singleItem.userType===1))
            .then(setTeachers)
    }
    

    return (
        <>
        
        <TeacherContext.Provider value={{
            TeacherProvider, Teachers, getTeachers
        }}>
            {props.children}
        </TeacherContext.Provider>
        </>
    )
}