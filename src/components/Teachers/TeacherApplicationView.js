import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherClasses } from "./TeacherClassesFolder/TeacherClasses"
import { TeacherClassForm } from "./TeacherClassesFolder/TeacherClassForm"
import { TeacherSupplyForm } from "./TeacherSupplyForm/TeacherSupplyForm"
import {SupplyItemsProvider} from "../DataProviders/SupplyItemProvider"
import {SupplyTypeProvider} from "../DataProviders/SupplyTypeProvider"
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
                    <TeacherSupplyForm></TeacherSupplyForm>
                </Route>
            </ClassListProvider>
            </SupplyItemsProvider>
            </SupplyTypeProvider>
            </ClassListSupplyItemProvider>

            <ClassListProvider>
                <Route  exact path="/teachers/addClass">
                    <TeacherClassForm></TeacherClassForm>
                </Route>
            </ClassListProvider>

            <ClassListSupplyItemProvider>
            <SupplyTypeProvider>
                <SupplyItemsProvider>
                    <Route exact path="/teachers/1">
                        <TeacherSupplyForm></TeacherSupplyForm>
                    </Route>
                </SupplyItemsProvider>
            </SupplyTypeProvider>
            </ClassListSupplyItemProvider>
        </>

    )

}
{/* <Route exact path="/teachers/addClass" render={
                props => <TeacherClassForm {...props}/>
            }/> */}
