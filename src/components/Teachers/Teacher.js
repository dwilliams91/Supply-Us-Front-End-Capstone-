import React from "react"

import { TeacherApplicationView } from "./TeacherApplicationView"

import { TeacherNavBar } from "./TeacherNavBar/TeacherNavBar"
export const Teacher = (props) => {
    return (
        <>
            <h1>hi</h1>
            <TeacherNavBar></TeacherNavBar>
            <TeacherApplicationView {...props}></TeacherApplicationView>
        </>
    )
}