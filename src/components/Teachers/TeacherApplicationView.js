import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherClasses } from "./TeacherClassesFolder/TeacherClasses"
import { TeacherClassForm } from "./TeacherClassesFolder/TeacherClassForm"
import { TeacherSupplyForm } from "./TeacherSupplyForm/TeacherSupplyForm"
import {SupplyItemsProvider} from "../DataProviders/SupplyItemProvider"
import {SupplyTypeProvider} from "../DataProviders/SupplyTypeProvider"
export const TeacherApplicationView = (props) => {
    return (
        <>
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


            <ClassListProvider>
                <Route  exact path="/teachers/addclass">
                    <TeacherClassForm></TeacherClassForm>
                </Route>
            </ClassListProvider>


            <SupplyTypeProvider>
                <SupplyItemsProvider>
                    <Route exact path="/teachers/1">
                        <TeacherSupplyForm></TeacherSupplyForm>
                    </Route>
                </SupplyItemsProvider>
            </SupplyTypeProvider>



        </>

    )

}
{/* <Route exact path="/teachers/addClass" render={
                props => <TeacherClassForm {...props}/>
            }/> */}
