import React, { useContext, useEffect } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTable } from "./TeacherSupplyTable"

export const TeacherSupplyTableList = (props) => {
    const { classListSupplyItem, getClassListSupplyItem } = useContext(ClassListSupplyItemContext)

    useEffect(() => {
        getClassListSupplyItem()
    }, [])

    const findClass=(myArray)=>{
        // // const classId=props.location.state.chosenClass.id
        // const foundClass=myArray.find(singleItem=>singleItem.classList.id===classId)
        // console.log("found class", foundClass)
        // return foundClass
    }


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Number
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {findClass()} */}
                    {classListSupplyItem.map(singleItem=>{
                        return <TeacherSupplyTable key={singleItem.id} myItem={singleItem}/>
                    })}

                </tbody>

            </table>
        </>
    )

}