import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherClasses } from "./TeacherClassesFolder/TeacherClasses"
import { TeacherClassForm } from "./TeacherClassesFolder/TeacherClassForm"
export const TeacherApplicationView = (props) => {
    return (
        <>
            <ClassListProvider>
                <Route exact path="/teachers">
                    <TeacherClasses></TeacherClasses>
                    <TeacherClassForm></TeacherClassForm>
                </Route>
            </ClassListProvider>
            <ClassListProvider>

            <Route exact path="/teachers/addClass">
                <TeacherClassForm></TeacherClassForm>
            </Route>
                
            </ClassListProvider>
            
        </>

    )

}
{/* <Route exact path="/teachers/addClass" render={
                props => <TeacherClassForm {...props}/>
            }/> */}
