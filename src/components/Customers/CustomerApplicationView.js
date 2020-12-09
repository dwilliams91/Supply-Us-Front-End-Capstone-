import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherProvider } from "../DataProviders/TeacherDataProvider"
import { CustomerForm } from "./CustomerForm"

export const CustomerApplicationView = () => {
    console.log("customer Application view is running")
    return (
        <TeacherProvider>
            <ClassListProvider>
                <Route exact path="/customers">
                    <CustomerForm></CustomerForm>
                </Route>
            </ClassListProvider>
        </TeacherProvider>
    )
}