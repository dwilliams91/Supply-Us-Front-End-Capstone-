import React, { useContext, useEffect } from "react"
import { TeacherContext } from "../DataProviders/TeacherDataProvider"

export const CustomerForm=()=>{
    const {Teachers, getTeachers}=useContext(TeacherContext)
    useEffect(()=>{
        getTeachers()
    },[])

    

    return (
        <>
        {console.log(Teachers)}
        <h2>This is working</h2>
       <select  id="SupplyType" className="form-control" >

                            <option value="0">Select Type</option>
                            {Teachers.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
        </>
    )
}