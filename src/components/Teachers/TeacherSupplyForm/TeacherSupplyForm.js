import React, { useContext, useEffect, useState } from "react"
import {SupplyItemContext} from "../../DataProviders/SupplyItemProvider"
import {SupplyTypeContext} from "../../DataProviders/SupplyTypeProvider"

export const TeacherSupplyForm=(props)=>{
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems, getSupplyItems } = useContext(SupplyItemContext)

    const [Type, setType] = useState(0)
    const [Item, setItem] = useState(0)

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
    }, [Type, SupplyItems])

   

    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])

    const FirstHandleFieldChange = (event) => {
        setType(event.target.value)
    }
    const SecondHandleFieldChange=(event)=>{
        setItem(event.target.value)
        let ItemName=SupplyItems.find(e=>e.id==parseInt(Item))

    }


return (
    <>
    {console.log(SupplyTypes)}
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
                {console.log(SupplyItems)}
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
                        <label>Number of {Item}</label>
                <input></input>

            </fieldset>

    </>
)
}