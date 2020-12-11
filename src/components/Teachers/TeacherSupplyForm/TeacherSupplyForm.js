import React, { useContext, useEffect, useRef, useState } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../../DataProviders/SupplyTypeProvider"
import {ClassListContext} from "../../DataProviders/ClassListProvider"
import { ItemSearch } from "./ItemSearch"
export const TeacherSupplyForm = (props) => {
    // getting the items from the providers
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems,searchTerms, getSupplyItems } = useContext(SupplyItemContext)
    const {addClassListSupplyItem} = useContext(ClassListSupplyItemContext)
    const {classLists, getClassLists}=useContext(ClassListContext)

    // defining the type and Item variables
    const [Type, setType] = useState(0)
    const [Item, setItem] = useState(0)
    const [ItemName, setItemName] = useState("")
    const [packageType, setPackType] = useState("Number of")
    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])
    const [ItemNumber, setItemNumber]= useState(0)
    const [description, setDescription]=useState([])

    const className=props.location.state.chosenClassName
    const classId=props.location.state.chosenClass.id
   
    // initial render
    useEffect(() => {
        getClassLists()
        .then(getSupplyTypes)
        .then(getSupplyItems)
    }, [])

  

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

    // check to see if the item bar has change, if it has change the item, but not to zero
    const SecondHandleFieldChange = (event) => {
        let ItemSelected=parseInt(event.target.value)
        console.log("Item Selected", ItemSelected)
        if (ItemSelected !==0){
            setItem(ItemSelected)
        } else{
            setItem(1)
        }
    }
    
    // re-render when there is a change in the item. Find the item to render on the dom by the number input button
    useEffect(() => {
        if (Item !== 0) {
            setItemName(SupplyItems.find(e => e.id == parseInt(Item)))

        } 
    }, [Item])

    // re-render when there is a change in item name, check to see if the item comes in packaging
    useEffect(() => {
        if (ItemName.packaging === true) {
            setPackType("Packs of ")
        } else {
            setPackType("Number of ")
        }
        // console.log(packageType)

    }, [ItemName])

    // Save the item
    const SaveItem = () => {
        const newItem={
            number: ItemNumber,
            supplyItemId: Item,
            description: description,
            classListId:classId
        }
        addClassListSupplyItem(newItem)
    }

    // this changes the values of the number and the description whenever one of them is changed
    const changeField=()=>{
        setItemNumber(document.getElementById("numberField").value)
        setDescription(document.getElementById("descriptionField").value)
    }
    
    // this resets the two text based fields since their uncontrolled fields
    const resetField = () => { 
        document.getElementById("formToReset").reset();
      }

    //   this is the search functionality
    useEffect(()=>{
        if (searchTerms !==""){
            const subset=SupplyItems.filter(singleItem=>singleItem.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFilteredSupplyItems(subset)
        } else{
            setFilteredSupplyItems(SupplyItems)
        }

    },[searchTerms, SupplyItems])

    return (
        <>      
          
    <h2>{className}</h2>
            <form >
                <fieldset>

                <ItemSearch></ItemSearch>
                </fieldset>
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
                        <label>Select Item </label>
                        <select value={Item} id="SupplyItem" className="form-control"  onChange={SecondHandleFieldChange}>
                        <option value="0">Select Item</option>

                            {filteredSupplyItems.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                </form>

                <form id="formToReset" >
                <fieldset>
                    <label>{packageType} {ItemName.name}</label>
                            <input id="numberField" onChange={changeField}></input>

                </fieldset>
                <fieldset>

                    <label> Description</label>
                    <textarea id="descriptionField" placeholder="Example: Red binders, 3 ring," onChange={changeField}></textarea>
                    <p>Here is where you can add any specific information. If they need three binders, here is where you put the colors, or 3 inches or 1 inch </p>
                </fieldset>
                <button type="submit" onClick={evt => {
                    evt.preventDefault()
                    SaveItem()
                    setItem(0)
                    setType(0)
                    setItemNumber(0)
                    setItemName("")
                    setDescription("")
                    resetField()                    
                }}> Save Item </button>
            </form>
        </>
    )
}