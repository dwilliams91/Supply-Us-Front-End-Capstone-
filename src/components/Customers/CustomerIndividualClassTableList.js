import React, {useContext, useEffect, useState} from "react"
import { ClassListContext } from "../DataProviders/ClassListProvider"
import {ClassListSupplyItemContext} from "../DataProviders/ClassListSupplyItemProvider"
import {CustomerIndividualClassTable} from "./CustomerIndividualClassTable"

export const CustomerIndividualClassTableList=(props)=>{
const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)
const {classLists, getClassLists}=useContext(ClassListContext)
    const classId=props.location.state.chosenClass.classListId
    const [thisSingleClass, setThisSingleClass]=useState([])
    const [thisSingleClassName, setThisSingleClassName]=useState("Hi!!")
    
    useEffect(() => {

        getClassListSupplyItem()
        getClassLists()
    }, [])
    // console.log(classId)

    useEffect(()=>{
        
        setThisSingleClass(classLists.find(singleClass=>singleClass.id===parseInt(classId)))
        
    },[classLists])

    useEffect(()=>{
        
        if (thisSingleClass){
        setThisSingleClassName(thisSingleClass.className)
        }
    },[thisSingleClass])

    useEffect(()=>{
        // console.log("is this hitting",thisSingleClassName)
    },[thisSingleClassName])
    
    

    return(
        <>
        {/* {console.log(thisSingleClassName)} */}
        <div className="CustomerTable">
    <h2>{thisSingleClassName}</h2>
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