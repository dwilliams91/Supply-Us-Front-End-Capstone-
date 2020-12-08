import React, { useContext, useEffect } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTable } from "./TeacherSupplyTable"

export const TeacherSupplyTableList = () => {
    const { classListSupplyItem, getClassListSupplyItem } = useContext(ClassListSupplyItemContext)

    useEffect(() => {
        getClassListSupplyItem()
    }, [])

    return (
        <>
        {/* {console.log(classListSupplyItem)} */}
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
                    {classListSupplyItem.map(singleItem=>{
                        return <TeacherSupplyTable key={singleItem.id} myItem={singleItem}/>
                    })}

                </tbody>

            </table>
        </>
    )

}