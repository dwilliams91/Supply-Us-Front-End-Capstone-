import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherClasses } from "./TeacherClassesFolder/TeacherClasses"
import { TeacherClassForm } from "./TeacherClassesFolder/TeacherClassForm"
import { TeacherSupplyForm } from "./TeacherSupplyForm/TeacherSupplyForm"
import { SupplyItemsProvider } from "../DataProviders/SupplyItemProvider"
import { SupplyTypeProvider } from "../DataProviders/SupplyTypeProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
export const TeacherApplicationView = (props) => {

    return (
        <>
            <ClassListSupplyItemProvider>
                <SupplyTypeProvider>
                    <SupplyItemsProvider>
                        <ClassListProvider>
                            <Route exact path="/teachers">
                                <TeacherClasses></TeacherClasses>
                                <TeacherClassForm></TeacherClassForm>
                                {/* <TeacherSupplyForm></TeacherSupplyForm> */}
                            </Route>
                            <Route path="/teachers" render={
                                props => <TeacherSupplyForm {...props} />
                            } />
                        </ClassListProvider>
                    </SupplyItemsProvider>
                </SupplyTypeProvider>
            </ClassListSupplyItemProvider>

            <ClassListProvider>
                <Route exact path="/teachers/addClass">
                    <TeacherClassForm></TeacherClassForm>
                </Route>
            </ClassListProvider>


            <ClassListSupplyItemProvider>
                <SupplyTypeProvider>
                    <SupplyItemsProvider>
                    <Route path="/teachers/class:ClassListId(\d+)" render={
                                props => <TeacherSupplyForm {...props} />
                            } />
                    </SupplyItemsProvider>
                </SupplyTypeProvider>
            </ClassListSupplyItemProvider>
        </>

    )

}
{/* <Route exact path="/teachers/addClass" render={
                props => <TeacherClassForm {...props}/>
            }/> */}
