import React, { useContext, useEffect, useState } from "react"
import { ClassListSupplyItemContext } from "../DataProviders/ClassListSupplyItemProvider"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { CustomerTable } from "./CustomerTable"


export const CustomerTableList=()=>{
    const {userClasses, getUserClasses}=useContext(UserClassesContext)

    const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)
    const [finalAddedArray, setFinalAddedArray]=useState([])
    const [OnlyMyClasses,setOnlyMyClasses]=useState([])

    useEffect(()=>{
        getUserClasses().then(getClassListSupplyItem)
    },[])

    useEffect(()=>{
        const user=parseInt(localStorage.getItem("app_user_id"))
        setOnlyMyClasses(userClasses.filter(e=>e.userId===user))
    },[userClasses])

    // this gets all the items into one list


    const addLists=(myClasses, AllLists)=>{
        // goes through all of my class and gets all items
    let ListOfAllMyItems=[]
    const myClassId=OnlyMyClasses.map(singleClass=>{
        const mySingleClass= singleClass.classList.id
        AllLists.map(singleListItem=>{
           if(singleListItem.classListId===mySingleClass){
               ListOfAllMyItems.push(singleListItem)
           }
        })

    })

    console.log("the main list",ListOfAllMyItems)
    // this adds them together
    // set an empty  array and an id counter
    let finalArray=[]
    let idCounter=1
    //  map out the list of all the items
     ListOfAllMyItems.map(singleItem=>{
        //  for each of the items, check the final array to see if it exists there. 
        const foundItem=finalArray.find(oneItem=>oneItem.name===singleItem.supplyItem.name)

        // if the items exists create a new object
        if (foundItem){
            // find the previous item and get the number and description array
           const indexSpot=finalArray.indexOf(foundItem)
           const previousItem=finalArray[indexSpot]
           const descriptionArray=previousItem.descriptions
           const  descriptionObj={
                className:singleItem.classList.name,
                description: singleItem.description
            }
            descriptionArray.push(descriptionObj)
            // create the new object
           const newItem=
           {
               id:previousItem.id,
               name:singleItem.supplyItem.name,
               number:parseInt(previousItem.number)+parseInt(singleItem.number),
               descriptions:descriptionArray         
           }
        //    splice it into the array 
           finalArray.splice(indexSpot, 1, newItem)
        } else{
            // if the item doesn't exist, create it
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
            <button onClick={event=>addLists(userClasses, classListSupplyItem)}> display the list of all my items</button>
        </>
    )
}