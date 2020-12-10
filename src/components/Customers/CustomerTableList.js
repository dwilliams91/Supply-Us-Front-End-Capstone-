import React, { useContext, useEffect } from "react"
import { ClassListSupplyItemContext } from "../DataProviders/ClassListSupplyItemProvider"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { CustomerTable } from "./CustomerTable"


export const CustomerTableList=()=>{
    const {userClasses, getUserClasses}=useContext(UserClassesContext)

    const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)

    useEffect(()=>{
        getUserClasses().then(getClassListSupplyItem)
    },[])

    const addLists=(myClasses, AllLists)=>{
    let ListOfAllMyItems=[]
    const myClassId=myClasses.map(singleClass=>{
        const mySingleClass= singleClass.classList.id
        AllLists.map(singleListItem=>{
           if(singleListItem.classListId===mySingleClass){
               ListOfAllMyItems.push(singleListItem)
           }
        })

    })
    console.log("the main list",ListOfAllMyItems)
    

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
                    <CustomerTable></CustomerTable>

                </tbody>

            </table>
            <button onClick={event=>addLists(userClasses, classListSupplyItem)}> display stuff</button>
        </>
    )
}