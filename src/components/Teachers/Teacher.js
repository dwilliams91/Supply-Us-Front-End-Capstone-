import React from "react"
import { Link } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherClasses } from "./TeacherClasses/TeacherClasses.js"
 
import {TeacherNavBar} from "./TeacherNavBar/TeacherNavBar"
export const Teacher = (props) => {
    return (
        <>
        <h1>hi</h1>
        <TeacherNavBar></TeacherNavBar>
        <ClassListProvider>
            <TeacherClasses></TeacherClasses>
        </ClassListProvider>
        </>
    )
}