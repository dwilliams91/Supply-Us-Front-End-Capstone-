import React from "react"
import { Route } from "react-router-dom"
import { Logout } from "../auth/Logout"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
import { TeacherProvider } from "../DataProviders/TeacherDataProvider"
import { UserClassesProvider } from "../DataProviders/UserClassesProvider"
import { CustomerForm } from "./CustomerForm"
import { CustomerIndividualClassTableList } from "./CustomerIndividualClassTableList"
import { CustomerTableList } from "./CustomerTableList"
export const CustomerApplicationView = () => {
    return (
        <>
        <ClassListSupplyItemProvider>
        <TeacherProvider>
            <ClassListProvider>
                <UserClassesProvider>
                    <div className="CustomerContainer">
                <Route exact path="/customers" render={props=> <CustomerForm {...props}/>}/>
                <Route exact path="/customers" render={props=> <CustomerTableList {...props}/>}/>

                </div>
                </UserClassesProvider>
            </ClassListProvider>
        </TeacherProvider>
        </ClassListSupplyItemProvider>
        <Route path="/customers/class:ClassListId(\d+)" render={
                                props => <CustomerIndividualClassTableList {...props} />
                            } />       
                            
     <Logout></Logout>
        </>
    )
}

         