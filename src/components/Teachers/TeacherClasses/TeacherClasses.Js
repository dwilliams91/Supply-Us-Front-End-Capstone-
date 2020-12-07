import React, { useContext, useEffect } from "react"
import { ClassListContext } from "../../DataProviders/ClassListProvider"

export const TeacherClasses=()=>{
    const {classLists, getClassLists}=useContext(ClassListContext)

    useEffect(()=>{
        getClassLists()
    },[])

    const filterClasses=(allClasses)=>{
        const user=parseInt(localStorage.getItem("app_user_id"))
        const myClasses=allClasses.filter(singleClass=> parseInt(singleClass.userId)===user)
        console.log(myClasses)
        return myClasses
    }

    return (
        <>
        <h1>what?</h1>
        {filterClasses(classLists).map(singleClass=>{
            return <h2 key={singleClass.id}>{singleClass.name}</h2>
        })}
        </>
    )

}