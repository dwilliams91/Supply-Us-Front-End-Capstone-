import React from "react"
import { Link } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherApplicationView } from "./TeacherApplicationView"
import { TeacherClasses } from "./TeacherClassesFolder/TeacherClasses"

import { TeacherNavBar } from "./TeacherNavBar/TeacherNavBar"
export const Teacher = (props) => {
    return (
        <>
            <h1>hi</h1>
            <TeacherNavBar></TeacherNavBar>
            <TeacherApplicationView></TeacherApplicationView>
        </>
    )
}