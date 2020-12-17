import React from "react"
import { Route } from "react-router-dom"
import { Logout } from "../auth/Logout"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
import { TeacherProvider } from "../DataProviders/TeacherDataProvider"
import { UserClassesProvider } from "../DataProviders/UserClassesProvider"
import { CustomerForm } from "./CustomerForm"
import { CustomerIndividualClassTableList } from "./CustomerIndividualClass/CustomerIndividualClassTableList"
import { CustomerTableList } from "./CustomerTableList"
export const CustomerApplicationView = () => {
    return (
        <>
        <div className="customerBackground">
        <div className="CustomerContainer">
            <ClassListSupplyItemProvider>
                <TeacherProvider>
                    <ClassListProvider>
                        <UserClassesProvider>
                            
                                <Route exact path="/customers" render={props => <CustomerForm {...props} />} />
                                <Route exact path="/customers" render={props => <CustomerTableList {...props} />} />

                            
                        </UserClassesProvider>
                    </ClassListProvider>
                </TeacherProvider>
            </ClassListSupplyItemProvider>

            <TeacherProvider>
                <ClassListSupplyItemProvider>
                    <ClassListProvider>
                        <UserClassesProvider>
                            
                        <Route path="/customers/class:ClassListId(\d+)" render={
                                props => <CustomerForm {...props} />
                            } />
                            <Route path="/customers/class:ClassListId(\d+)" render={
                                props => <CustomerIndividualClassTableList {...props} />
                            } />
                           
                        </UserClassesProvider>
                    </ClassListProvider>
                </ClassListSupplyItemProvider>
            </TeacherProvider>
            </div>

            <Route render={props => <Logout {...props} />} />  
            </div>     
             </>

    )
}

