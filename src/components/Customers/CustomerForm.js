import React, { useContext, useEffect, useState } from "react"
import { TeacherContext } from "../DataProviders/TeacherDataProvider"
import { ClassListContext } from "../DataProviders/ClassListProvider"

export const CustomerForm = () => {
    const { Teachers, getTeachers } = useContext(TeacherContext)
    const { classLists, getClassLists } = useContext(ClassListContext)

    const [Teacher, setTeacher]=useState(0)
    const [Class, setClass]=useState(0)
    const [filteredClasses, setFilteredClasses]=useState([])

    useEffect(() => {
        getTeachers()
        .then(getClassLists)
    }, [])

    const FirstHandleFieldChange=(event)=>{
        setTeacher(event.target.value)
    }
    useEffect(()=>{
        const selectTeacherParsed=parseInt(Teacher)
        if (selectTeacherParsed===0){
            setFilteredClasses(classLists)
        } else {
            setFilteredClasses(classLists.filter(e=>e.userId===selectTeacherParsed))
        }
    },[Teacher, classLists])


    return (
        <>
            
            <h2>This is working</h2>
            <form>
                <fieldset>
            <select value={Teacher}id="TeacherName" className="form-control" onChange={FirstHandleFieldChange}>
                <option value="0">Select Teacher</option>
                {Teachers.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
            </fieldset>
            <fieldset>
            <select value={Class}id="ClassName" className="form-control" >
                <option value="0">Select Class</option>
                {filteredClasses.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
            </fieldset>
            </form>
        </>
    )
}