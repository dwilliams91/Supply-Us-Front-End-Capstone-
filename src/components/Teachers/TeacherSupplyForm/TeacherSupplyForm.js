import React, { useContext, useEffect, useRef, useState } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../../DataProviders/SupplyTypeProvider"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import { ItemSearch } from "./ItemSearch"
import "./TeacherSupply.css"
import {Dropdown} from "react-bootstrap"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
export const TeacherSupplyForm = (props) => {
    // getting the items from the providers
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems, searchTerms, getSupplyItems } = useContext(SupplyItemContext)
    const { addClassListSupplyItem } = useContext(ClassListSupplyItemContext)
    const { classLists, getClassLists } = useContext(ClassListContext)

    // defining the type and Item variables
    const [Type, setType] = useState(0)
    const [Item, setItem] = useState(0)
    const [ItemName, setItemName] = useState("")
    const [packageType, setPackType] = useState("Number of")
    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])
    const [ItemNumber, setItemNumber] = useState(0)
    const [description, setDescription] = useState("")
    const [ItemQuantity, setItemQuantity] = useState("")
    // SET UP STATE VARIABLE FOR NUMBER SET TO EMPTY STRING
    const className = props.location.state.chosenClassName
    const classId = props.location.state.chosenClass.id

    // initial render
    useEffect(() => {
        getClassLists()
            .then(getSupplyTypes)
            .then(getSupplyItems)
    }, [])



    // check to see if the type bar has changed, if it has set the type
    const TypeChangeField = (event) => {
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
    const ItemChangeField = (event) => {
        let ItemSelected = parseInt(event.target.value)
        console.log("Item Selected", ItemSelected)
        if (ItemSelected !== 0) {
            setItem(ItemSelected)
        } else {
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
        const newItem = {
            number: ItemQuantity,
            supplyItemId: Item,
            description: description,
            classListId: classId
        }
        addClassListSupplyItem(newItem).then(() => setItemQuantity(""))
    }
    // this changes the values of the number and the description whenever one of them is changed
    const NumberChangeField = (e) => {
        console.log(e.target.value)
        if (e.target.value){
            if (isNaN(e.target.value)!==true){
                setItemQuantity(e.target.value)
            }
            else {
                window.alert("Please only put a number")
            }
        } else {
            setItemQuantity("")
        }
        
    }
    
    const DescriptionChangeField = (e) => {
        setDescription(e.target.value)
    }

    //   this is the search functionality
    useEffect(() => {
        if (searchTerms !== "") {
            const subset = SupplyItems.filter(singleItem => singleItem.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFilteredSupplyItems(subset)
        } else {
            setFilteredSupplyItems(SupplyItems)
        }

    }, [searchTerms, SupplyItems])

    return (
        <>
            <div className="SupplyFormContainer">
                
            <form >
                    <fieldset className="TeacherFieldSet">
                        <div>
                            <label className="TeacherLabel"> Select Item </label>
                            <select size="sm" value={Item} id="SupplyItem"  onChange={ItemChangeField}>
                                <option value="0">Select Item</option>

                                {filteredSupplyItems.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    <p>Can't find what you are looking for? Narrow the list down by selecting a type or searching.</p>
                        <div>
                        <label className="TeacherLabel">Select Type </label>
                                <select value={Type} id="SupplyType"  onChange={TypeChangeField}>
                                
                                <option value="0">Select Type</option>
                                {SupplyTypes.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.type}
                                    </option>
                                ))}
                            </select>
                            <div>
                            <ItemSearch></ItemSearch>
                            <br></br>
                            
                            </div>
                        </div>
                    </fieldset>
                </form>

                <form >

                    <fieldset className="TeacherFieldSet">
                        <div>
                            <label className="TeacherLabel">{packageType} {ItemName.name}</label>
                            <input id="quantity" value={ItemQuantity}  onChange={NumberChangeField}></input>
                        </div>
                    </fieldset>
                    <fieldset className="TeacherFieldSet">
                    <div className="descriptionFormGroup">
                        <label className="TeacherLabel"> Description</label>
                        <textarea id="descriptionField" placeholder="Example: Red binders, 3 ring," value={description} onChange={DescriptionChangeField}></textarea>
                        <p>Here is where you can add any specific information. If they need three binders, here is where you put the colors, or 3 inches or 1 inch </p>
                    </div>
                    </fieldset>
                    <button type="submit" onClick={evt => {
                        evt.preventDefault()
                        SaveItem()
                        setItem(0)
                        setType(0)
                        setItemNumber(0)
                        setItemName("")
                        setDescription("")
                    }}> Save Item </button>
                </form>
            </div>
        </>
    )
}