import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherProvider } from "../DataProviders/TeacherDataProvider"
import { UserClassesProvider } from "../DataProviders/UserClassesProvider"
import { CustomerForm } from "./CustomerForm"
import { CustomerTableList } from "./CustomerTableList"
export const CustomerApplicationView = () => {
    return (
        <TeacherProvider>
            <ClassListProvider>
                <UserClassesProvider>
                <Route exact path="/customers">
                    <CustomerForm></CustomerForm>
                    <CustomerTableList></CustomerTableList>
                </Route>
                </UserClassesProvider>
            </ClassListProvider>
        </TeacherProvider>
    )
}