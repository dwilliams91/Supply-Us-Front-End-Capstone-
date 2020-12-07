import React from "react"
import { Link } from "react-router-dom"


export const TeacherClass = ({myClass}) => (
    
        <h3 className="animal__name">
            <Link to={`/teachers/${myClass.id}`}>
                { myClass.name }
            </Link>
        </h3>
)