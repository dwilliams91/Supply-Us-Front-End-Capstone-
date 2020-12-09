import React, { useContext, useEffect } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTable } from "./TeacherSupplyTable"

export const TeacherSupplyTableList = (props) => {
    const { classListSupplyItem, getClassListSupplyItem } = useContext(ClassListSupplyItemContext)
    const classId=props.location.state.chosenClass.id

    useEffect(() => {

        getClassListSupplyItem()
    }, [])


    return (
        <>
        {/* {console.log("classId",classId)} */}
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
                    {classListSupplyItem.filter(singleItem=>singleItem.classList.id===parseInt(classId)).map(singleItem=>{
                        return <TeacherSupplyTable key={singleItem.id} myItem={singleItem} props={props}/>
                    })}

                </tbody>

            </table>
        </>
    )

}