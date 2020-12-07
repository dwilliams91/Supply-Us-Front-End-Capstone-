import React, { useContext, useEffect, useRef } from "react"
import { ClassListContext, ClassListProvider } from "../../DataProviders/ClassListProvider"

export const TeacherClassForm=(props)=>{
    const { addClassList}=useContext(ClassListContext)

    const name=useRef(null)
    const user=parseInt(localStorage.getItem("app_user_id"))
    
    const constructNewClass=()=>{
         
        const newClass=
        {
            name:name.current.value,
            userId:user
        }
        addClassList(newClass)
    }

    return (
       <>
       <h2> Add a class</h2>
       <form>
           <fieldset>
           <input type="text" id="AddingAClass" ref={name} required autoFocus className="form-control" placeholder="Add a class" />
           
                </fieldset>
           <button type="submit" onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewClass()
                }}> Save </button>
       </form>
       </>
    )

}