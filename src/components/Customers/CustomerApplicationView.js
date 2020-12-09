import React  from "react"
import { Route } from "react-router-dom"
import { TeacherProvider } from "../DataProviders/TeacherDataProvider"
import { CustomerForm } from "./CustomerForm"

export const CustomerApplicationView=()=>{
    console.log("customer Application view is running")
    return (
        <TeacherProvider>
        <Route exact path="/customers">
            <CustomerForm></CustomerForm>
        </Route>
        </TeacherProvider>
    )
}