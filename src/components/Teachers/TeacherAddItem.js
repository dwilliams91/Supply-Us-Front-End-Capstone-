import React, { useContext, useEffect, useState, useRef } from "react"
import { SupplyItemContext } from "../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../DataProviders/SupplyTypeProvider"

export const TeacherAddItem = () => {
    const { SupplyItems, getSupplyItems, addSupplyItem } = useContext(SupplyItemContext)
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const [Type, setType] = useState(0)
    const [newItemName, setNewItemName]=useState("")
    const [Package, setPackage]=useState(false)
    const Packaging=useRef(null)
    useEffect(() => {
        getSupplyItems()
        getSupplyTypes()
    }, [])

    const TypeChangeField = (event) => {
        setType(event.target.value)
    }
   const  newItemNameChangeField=(event)=>{
       setNewItemName(event.target.value)
   }

   const PackageChangeField=(event)=>{
       console.log(event.target.checked)
       if (event.target.checked===true){
           setPackage(true)
       } else{
           setPackage(false)
       }
   }
   const SaveItem=()=>{
       const newItem={
           typeId:parseInt(Type),
           name:newItemName,
           packaging:Package
       }
       console.log(newItem)
       addSupplyItem(newItem)
   }

    return (
        <>
            <h1> what what</h1>
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
                <input type="checkbox" ref={Packaging} onChange={PackageChangeField}></input>
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