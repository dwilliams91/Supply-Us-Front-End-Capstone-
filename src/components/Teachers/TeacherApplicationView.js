import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherClasses } from "./TeacherClassesFolder/TeacherClasses"
import { TeacherClassForm } from "./TeacherClassesFolder/TeacherClassForm"
import { TeacherSupplyForm } from "./TeacherSupplyForm/TeacherSupplyForm"
import { SupplyItemsProvider } from "../DataProviders/SupplyItemProvider"
import { SupplyTypeProvider } from "../DataProviders/SupplyTypeProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTableList } from "./TeacherSupplyForm/TeacherSupplyTableList"
export const TeacherApplicationView = (props) => {
    const userType=parseInt(localStorage.getItem("userType"))
    console.log("userType", userType)
    if (userType !==1){
        props.history.push("/customers")
    }
    return (
        <>
            <ClassListSupplyItemProvider>
                <SupplyTypeProvider>
                    <SupplyItemsProvider>
                        <ClassListProvider>
                            <Route exact path="/teachers">
                                <TeacherClasses></TeacherClasses>
                            </Route>
                        </ClassListProvider>
                    </SupplyItemsProvider>
                </SupplyTypeProvider>
            </ClassListSupplyItemProvider>

            <ClassListProvider>
                <Route exact path="/teachers/addClass" >
                    <TeacherClassForm></TeacherClassForm>
                </Route>
            </ClassListProvider>


            <ClassListProvider>
            <ClassListSupplyItemProvider>
                <SupplyTypeProvider>
                    <SupplyItemsProvider>
                    <Route path="/teachers/class:ClassListId(\d+)" render={
                                props => <TeacherSupplyForm {...props} />
                            } />
                            <Route path="/teachers/class:ClassListId(\d+)" render={
                                props => <TeacherSupplyTableList {...props} />
                            } />

                    </SupplyItemsProvider>
                </SupplyTypeProvider>
            </ClassListSupplyItemProvider>
            </ClassListProvider>
        </>

    )

}

