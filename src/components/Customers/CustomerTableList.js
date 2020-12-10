import React, { useContext, useEffect, useState } from "react"
import { ClassListSupplyItemContext } from "../DataProviders/ClassListSupplyItemProvider"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { CustomerTable } from "./CustomerTable"


export const CustomerTableList=()=>{
    const {userClasses, getUserClasses}=useContext(UserClassesContext)

    const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)
    const [finalAddedArray, setFinalAddedArray]=useState([])
    useEffect(()=>{
        getUserClasses().then(getClassListSupplyItem)
    },[])
    // this gets all the items into one list
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
    // this adds them together
    let finalArray=[]
    let idCounter=1
     ListOfAllMyItems.map(singleItem=>{
        const foundItem=finalArray.find(oneItem=>oneItem.name===singleItem.supplyItem.name)
        
        if (foundItem){
           const indexSpot=finalArray.indexOf(foundItem)
           const previousItem=finalArray[indexSpot]
           const descriptionArray=previousItem.descriptions
           const  descriptionObj={
                className:singleItem.classList.name,
                description: singleItem.description
            }
            descriptionArray.push(descriptionObj)


           const newItem=
           {
               id:previousItem.id,
               name:singleItem.supplyItem.name,
               number:parseInt(previousItem.number)+parseInt(singleItem.number),
               descriptions:descriptionArray         
           }
           
           finalArray.splice(indexSpot, 1, newItem)
        } else{
            const descriptionArray=[]
           const  descriptionObj={
                className:singleItem.classList.name,
                description: singleItem.description
            }
            descriptionArray.push(descriptionObj)
           const newItem={
               id:idCounter,
               name:singleItem.supplyItem.name,
               number:singleItem.number,
               descriptions:descriptionArray
           }
           idCounter++
        //    console.log(newItem)
           finalArray.push(newItem)
        }

    })
    console.log("finalArray", finalArray)
    setFinalAddedArray(finalArray)
    }


    return (
        <>
        {/* {console.log(finalAddedArray)} */}
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
                    {finalAddedArray.map(singleItem=><CustomerTable key={singleItem.id} myItem={singleItem}></CustomerTable>)}

                </tbody>

            </table>
            <button onClick={event=>addLists(userClasses, classListSupplyItem)}> display stuff</button>
        </>
    )
}