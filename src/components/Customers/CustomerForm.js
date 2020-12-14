import React, { useContext, useEffect, useState } from "react"
import { TeacherContext } from "../DataProviders/TeacherDataProvider"
import { ClassListContext } from "../DataProviders/ClassListProvider"
import {UserClassesContext} from "../DataProviders/UserClassesProvider"
import {CustomerClassCards} from "./CustomerClassCards"
import "./Customer.css"
export const CustomerForm = (props) => {
    const { Teachers, getTeachers } = useContext(TeacherContext)
    const { classLists, getClassLists } = useContext(ClassListContext)
    const {userClasses, getUserClasses, addUserClasses}=useContext(UserClassesContext)

    const [Teacher, setTeacher]=useState(0)
    const [Class, setClass]=useState(0)
    const [filteredClasses, setFilteredClasses]=useState([])
    const [myClasses,setMyClasses]=useState([])

    useEffect(() => {
        getTeachers()
        .then(getClassLists)
        .then(getUserClasses)
    }, [])
   
    const FirstHandleFieldChange=(event)=>{
        setTeacher(event.target.value)
    }
    const SecondHandleFieldChange=(event)=>{
        setClass(event.target.value)
    }
    useEffect(()=>{
        const selectTeacherParsed=parseInt(Teacher)
        if (selectTeacherParsed===0){
            setFilteredClasses(classLists)
        } else {
            setFilteredClasses(classLists.filter(e=>e.userId===selectTeacherParsed))
        }
    },[Teacher, classLists])

    const saveClasses=()=>{
        const user=parseInt(localStorage.getItem("app_user_id"))
        console.log(Class)
        const newItem={
            userId:user,
            classListId: parseInt(Class)

        }
        if (userClasses.find(singleClass=> singleClass.userId===newItem.userId && singleClass.classListId===newItem.classListId)){
            window.alert("You already have this class")
        } else {
            addUserClasses(newItem)
        }
    }

    const displayAllLists=()=>{
        props.history.push("/customers")

    }

    useEffect(()=>{
        const user=parseInt(localStorage.getItem("app_user_id"))
        setMyClasses(userClasses.filter(e=>e.userId===user))
    },[userClasses])
    return (
        <>

        <div className="CustomerForm">
            <h2>Find Your Classes</h2>
            <form>
                <fieldset>
                    <label>Select A Teacher</label>
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
            <label>Select A Class </label>
            <select id="ClassName" className="form-control" onChange={SecondHandleFieldChange} >
                <option value="0">Select Class</option>
                {filteredClasses.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
            </fieldset>
            <button type="submit" onClick={event=>{
                event.preventDefault()
                saveClasses()
                }}> Save Class</button>
            </form>
            <h3>Your Classes</h3>
            <div className="myClassesContainer">
                {myClasses.map(singleClass=>{
                    return <CustomerClassCards key={singleClass.id} myClass={singleClass} props={props}></CustomerClassCards> 
                })}
            </div>
            <button onClick={event=>{displayAllLists()}}>Display All Classes</button>
            </div>
        </>
    )
}