import React, {useContext, useEffect} from "react"
import {ClassListSupplyItemContext} from "../DataProviders/ClassListSupplyItemProvider"
import {CustomerIndividualClassTable} from "./CustomerIndividualClassTable"
export const CustomerIndividualClassTableList=(props)=>{

const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)
    const classId=props.location.state.chosenClass.classListId
    useEffect(() => {

        getClassListSupplyItem()
    }, [])
    console.log(classId)

    return(
        <>
        <div className="CustomerTable">
    <h2>{props.location.state.chosenClassName}</h2>
            <table >
                
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
                        return <CustomerIndividualClassTable key={singleItem.id} myItem={singleItem}/>
                    })}

                </tbody>

            </table>
            </div>
        </>
        
    )
}