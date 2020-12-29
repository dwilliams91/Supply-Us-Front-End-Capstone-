import React, {useContext, useEffect, useState} from "react"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import {ClassListSupplyItemContext} from "../../DataProviders/ClassListSupplyItemProvider"
import {CustomerIndividualClassTable} from "./CustomerIndividualClassTable"
import {Table} from "react-bootstrap"

export const CustomerIndividualClassTableList=(props)=>{
const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)
const {classLists, getClassLists}=useContext(ClassListContext)
// const [classId, setClassId]=useState([])
const [listToDisplay, setListToDisplay]=useState([])
    const classId=props.location.state.chosenClass.classListId
    const MyClass=props.location.state.chosenClassName
    // console.log("my class is", MyClass)
    
    useEffect(() => {
        // setClassId(props.location.state.chosenClass.classListId)
        getClassLists().then(()=>{
            getClassListSupplyItem()

        })
        
    }, [])

    useEffect(()=>{
        const onlyMyItems=classListSupplyItem.filter(singleItem=>singleItem.classList.id===parseInt(classId))
        setListToDisplay(onlyMyItems)
    },[classListSupplyItem])

    return(
        <>
        {/* {console.log(thisSingleClass)} */}
        <div className="CustomerTable">
        <h2>{MyClass}</h2>
            <Table striped bordered hover>
                
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
                    {console.log(listToDisplay)}
                    {classListSupplyItem.filter(singleItem=>singleItem.classList.id===parseInt(classId)).map(singleItem=>{
                        return <CustomerIndividualClassTable key={singleItem.id} myItem={singleItem}/>
                    })}

                </tbody>

            </Table>
            </div>
        </>
        
    )
}