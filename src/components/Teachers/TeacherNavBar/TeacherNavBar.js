import React from "react"
import { Link } from "react-router-dom"
import "./TeacherNavBar.css"

export const TeacherNavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/teachers">My Classes</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/teachers/addClass">Add a Class</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/teachers/addItem">Add an Item To the Database</Link>
            </li>
        </ul>
    )
}