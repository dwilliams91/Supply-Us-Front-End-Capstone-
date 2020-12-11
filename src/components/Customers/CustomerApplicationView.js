import React from "react"
import { Route } from "react-router-dom"
import { Logout } from "../auth/Logout"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
import { TeacherProvider } from "../DataProviders/TeacherDataProvider"
import { UserClassesProvider } from "../DataProviders/UserClassesProvider"
import { CustomerForm } from "./CustomerForm"
import { CustomerTableList } from "./CustomerTableList"
export const CustomerApplicationView = () => {
    return (
        <>
        <ClassListSupplyItemProvider>
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
        </ClassListSupplyItemProvider>
        <Logout></Logout>
        </>
    )
}