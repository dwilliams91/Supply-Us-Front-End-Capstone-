import React, { useContext, useEffect, useState, useRef } from "react"
import { SupplyItemContext } from "../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../DataProviders/SupplyTypeProvider"

export const TeacherAddItem = () => {
    const { SupplyItems, getSupplyItems, addSupplyItem, updateItem } = useContext(SupplyItemContext)
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const [Type, setType] = useState(0)
    const [newItemName, setNewItemName] = useState("")
    const [Package, setPackage] = useState(false)
    const [editItem, setEditItem]=useState(0)
    const Packaging = useRef(null)
    const [editMode, setEditMode]=useState(false)

    const [TypeDropDown, setTypeDropDown]=useState([])

    useEffect(() => {
        getSupplyItems()
        getSupplyTypes().then(()=>{
            setTypeDropDown(SupplyTypes)
        })
    }, [])



    const TypeChangeField = (event) => {
        setType(event.target.value)
    }
    const newItemNameChangeField = (event) => {
        setNewItemName(event.target.value)
    }

    const PackageChangeField = (event) => {
        console.log(event.target.checked)
        if (event.target.checked === true) {
            setPackage(true)
        } else {
            setPackage(false)
        }
    }

    const SaveItem = () => {
        if(editMode){
            const newItem = {
                id:editItem,
                typeId: parseInt(Type),
                name: newItemName,
                packaging: Package
            }
            updateItem(newItem)
        } else {
            const newItem = {
                typeId: parseInt(Type),
                name: newItemName,
                packaging: Package
            }
            addSupplyItem(newItem)
        }
        // addSupplyItem(newItem)
    }


    const EditSelected=(event)=>{
        if (parseInt(event.target.value) !==0){
            setEditItem(event.target.value)
        } else {
            setEditItem(0)
            setEditMode(false)
            setType(0)
            setNewItemName("")
            setPackage(false)
        }
    }

    useEffect(()=>{
        const ItemToEdit=SupplyItems.find(e=>e.id===parseInt(editItem))
        if(ItemToEdit){
            setEditMode(true)
            setNewItemName(ItemToEdit.name)
            setPackage(ItemToEdit.packaging)
            setType(ItemToEdit.typeId)
        }
    },[editItem])


    return (
        <>
            <h1> Add or Edit an Item</h1>
                <h3>To Edit an Item</h3>
            <fieldset>
                <label>Select an Item</label>
                <select id="SupplyType" value={editItem} className="form-control" onChange={EditSelected}>
                    <option value="0">Select an Item</option>
                    {SupplyItems.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </fieldset>
            <br></br>
            <h3> To add an Item</h3>
            <fieldset>
                <span>

                    <label>Select Type </label>
                    <select value={Type} id="SupplyType" className="form-control" onChange={TypeChangeField}>

                        <option value="0">Select Type</option>
                        {SupplyTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.type}
                            </option>
                        ))}
                    </select>

                    <label> or Add a New Type</label>
                    <input id="quantity" value={Type} onChange={TypeChangeField}></input>
                </span>
            </fieldset>
            <fieldset>
                <label>Name of New Item</label>
                <input value={newItemName} onChange={newItemNameChangeField}></input>
            </fieldset>
            <fieldset>
                <p>Is it sold in Packs?</p>
                <label>Yes</label>
                <input type="checkbox" ref={Packaging} value={Package} onChange={PackageChangeField}></input>
                <label> No</label>
                <input type="checkbox"></input>
            </fieldset>

            <button type="submit" onClick={evt => {
                evt.preventDefault()
                SaveItem()
            }}> Save Item </button>
        </>
    )
}