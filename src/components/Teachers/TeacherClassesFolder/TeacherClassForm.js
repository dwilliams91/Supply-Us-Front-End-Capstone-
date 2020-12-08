import React, { useContext, useRef } from "react"
import { ClassListContext } from "../../DataProviders/ClassListProvider"

export const TeacherClassForm=(props)=>{
    // get the add class function
    const { addClassList}=useContext(ClassListContext)

    // set user to logged in user and set the name so it can be used again
    const name=useRef(null)
    const user=parseInt(localStorage.getItem("app_user_id"))
    
    // creates a new object with the name the person entered in the form. Dispatches it to the json
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