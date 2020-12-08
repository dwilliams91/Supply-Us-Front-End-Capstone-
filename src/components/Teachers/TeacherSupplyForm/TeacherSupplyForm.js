import React, { useContext, useEffect, useRef, useState } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../../DataProviders/SupplyTypeProvider"
import {ClassListContext} from "../../DataProviders/ClassListProvider"
export const TeacherSupplyForm = (props) => {
    // getting the items from the providers
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems, getSupplyItems } = useContext(SupplyItemContext)
    const {addClassListSupplyItem} = useContext(ClassListSupplyItemContext)
    const {classLists, getClassLists}=useContext(ClassListContext)

    // defining the type and Item variables
    const [Type, setType] = useState(0)
    const [Item, setItem] = useState(0)
    const [ItemName, setItemName] = useState("")
    const [packageType, setPackType] = useState("Number of")
    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])
    const [className, setClassName]= useState("class")
    const classId=props.location.state.chosenClass.id
    
    // getClassLists().then(()=>{
    //     console.log("is this empty",classLists)
    //     const FoundClass=classLists.find(singleItem=>singleItem.id===parseInt(classId))
    //     return FoundClass
    // })

    // initial render
    useEffect(() => {
        getClassLists()
        .then(getSupplyTypes)
        .then(getSupplyItems)
    }, [])

    useEffect(()=>{
        const foundClass=classLists.find(singleItem=>singleItem.id===classId)
        console.log("found class", foundClass)
        setClassName(foundClass.name)

    },[classLists])

    

    // check to see if the type bar has changed, if it has set the type
    const FirstHandleFieldChange = (event) => {
        setType(event.target.value)
    }
    // re-rendering when the type changes. If the type is not 0, filter the item bar
    useEffect(() => {
        const selectTypeParsed = parseInt(Type)
        if (selectTypeParsed === 0) {
            setFilteredSupplyItems(SupplyItems)
        } else {
            setFilteredSupplyItems(SupplyItems.filter(e => e.typeId === selectTypeParsed))
        }
        // console.log(Type)
    }, [Type, SupplyItems])

    // check to see if the item bar has change, if it has change the item. 
    const SecondHandleFieldChange = (event) => {
        setItem(event.target.value)
    }

    // re-render when there is a change in the item. Find the item to render on the dom
    useEffect(() => {
        // console.log(Item)
        // this stuff runs so it will work on render
        // if the item is not 0, then 
        if (Item !== 0) {
            setItemName(SupplyItems.find(e => e.id == parseInt(Item)))

        } else {

        }
    }, [Item])
    // re-render when there is a change in item name, check to see if the item comes in packaging
    useEffect(() => {
        if (ItemName.packaging === true) {
            setPackType("Packs of ")
        } else {
            setPackType("Number of ")
        }
        console.log(packageType)

    }, [ItemName])

    // define number and description to be used later
    const number=useRef(null)
    const description=useRef(null)

    const SaveItem = () => {
        const newItem={
            number: number.current.value,
            supplyItemId: Item,
            description: description.current.value,
            classListId:classId
        }
        addClassListSupplyItem(newItem)
    }
    



    return (
        <>      
          
    <h2>{className}</h2>
            <form>
                <fieldset>
                    <div className="form-group">
                        <label>Select Type </label>
                        <select value={Type} id="SupplyType" className="form-control" onChange={FirstHandleFieldChange}>

                            <option value="0">Select Type</option>
                            {SupplyTypes.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.type}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label>Select Type </label>
                        <select value={Item} id="SupplyItem" className="form-control" onChange={SecondHandleFieldChange}>
                            <option value="0">Select Type</option>
                            {filteredSupplyItems.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label>{packageType} {ItemName.name}</label>
                    <input  ref={number} ></input>

                </fieldset>
                <fieldset>

                    <label> Description</label>
                    <textarea ref={description} placeholder="Example: Red binders, 3 ring, "></textarea>
                    <p>Here is where you can add any specific information. If they need three binders, here is where you put the colors, or 3 inches or 1 inch </p>
                </fieldset>
                <button type="submit" onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    SaveItem()
                }}> Save Item </button>
            </form>
        </>
    )
}