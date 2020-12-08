import React from "react"
import { Link } from "react-router-dom"


export const TeacherClass = ({myClass}) => (
    
        <h3 className="animal__name">
            <Link to={{
                pathname:`/teachers/class${myClass.id}`,
                state:{
                chosenClassName:myClass.name,
                chosenClass:myClass
            }
                }}>
                { myClass.name }
            </Link>
        </h3>
)

