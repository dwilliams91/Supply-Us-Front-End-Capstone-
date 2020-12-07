import React, { useContext, useEffect, useState } from "react"
import {SupplyItemContext} from "../../DataProviders/SupplyItemProvider"
import {SupplyTypeContext} from "../../DataProviders/SupplyTypeProvider"

export const TeacherSupplyForm=(props)=>{
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems, getSupplyItems } = useContext(SupplyItemContext)

    const [Type, setType] = useState(0)
    const [Item, setItem] = useState(0)
    const [ItemName,setItemName]=useState("")
    const [packageType,setPackType]=useState("Number of")
    useEffect(() => {
        getSupplyTypes()
    }, [])
    useEffect(() => {
        getSupplyItems()

    }, [])


    useEffect(() => {
        const selectTypeParsed = parseInt(Type)
        if (selectTypeParsed === 0) {
            setFilteredSupplyItems(SupplyItems)
        } else {
            setFilteredSupplyItems(SupplyItems.filter(e => e.typeId === selectTypeParsed))
        }
        console.log(Type)
    }, [Type, SupplyItems])

    useEffect(()=>{
        console.log(Item)
        // this stuff runs so it will work on render
        // if the item is not 0, then 
        if (Item!==0){
        setItemName(SupplyItems.find(e=>e.id==parseInt(Item)))
       
        } else {
           
        }
        
        
    },[Item])

    useEffect(()=>{
        if (ItemName.packaging===true){
            setPackType("Packs of ")
        } else {
            setPackType("Number of ")
        }
        console.log(packageType)

    },[ItemName])


    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])

    const FirstHandleFieldChange = (event) => {
        setType(event.target.value)
    }
    const SecondHandleFieldChange=(event)=>{
        setItem(event.target.value)
        
    }


return (
    <>
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
                <input></input>

            </fieldset>

    </>
)
}