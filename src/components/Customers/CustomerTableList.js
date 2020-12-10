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
    let finalArray=[]
    ListOfAllMyItems.map(singleItem=>{
        
        const foundItem=finalArray.find(oneItem=>oneItem.name===singleItem.supplyItem.name)
        
        if (foundItem){
           const indexSpot=finalArray.indexOf(foundItem)
           const previousItem=finalArray[indexSpot]
           const newItem=
           {
               name:singleItem.supplyItem.name,
               number:parseInt(previousItem.number)+parseInt(singleItem.number)
               
           }
           
           finalArray.splice(indexSpot, 1, newItem)
        } else{
           const newItem={
               name:singleItem.supplyItem.name,
               number:singleItem.number,
           }
        //    console.log(newItem)
           finalArray.push(newItem)
        }

    })
    console.log("finalArray", finalArray)

    

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