import React from "react"

import { TeacherApplicationView } from "./TeacherApplicationView"

import { TeacherNavBar } from "./TeacherNavBar/TeacherNavBar"
export const Teacher = (props) => {
    return (
        <>
            <TeacherApplicationView {...props}></TeacherApplicationView>
        </>
    )
}