import React from "react"

export const Logout=(props)=>{

    const LogoutFunction=(e)=>{
            e.preventDefault()
            localStorage.clear()
            props.history.push("/login")
        }
    

    return (
        <>
        <form>
        <button type="submit" onClick={event=>LogoutFunction()}> Logout</button>
        </form>
        </>
    )
}