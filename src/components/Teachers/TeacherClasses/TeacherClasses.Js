import React, { useContext, useEffect } from "react"
import { ClassListContext } from "../../DataProviders/ClassListProvider"

export const TeacherClasses=()=>{
    const {classLists, getClassLists}=useContext(ClassListContext)

    useEffect(()=>{
        getClassLists()
    },[])

    return (
        <>
        <h1>what?</h1>
        {classLists.map(singleClass=>{
            return <h2 key={singleClass.id}>{singleClass.name}</h2>
        })}
        </>
    )

}