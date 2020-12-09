import React  from "react"
import { Route } from "react-router-dom"

export const CustomerApplicationView=()=>{
    console.log("customer Application view is running")
    return (
        <Route exact path="/customers">
            <h1>whats up?</h1>
        </Route>
    )
}