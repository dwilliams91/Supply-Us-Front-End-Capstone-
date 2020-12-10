import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { ClassListContext } from "../../DataProviders/ClassListProvider"


export const TeacherClass = ({myClass}) => {
    const {deleteClassList}=useContext(ClassListContext)

    return(
    <>
    <div className="classCard">
        <h3 className="ClassName">
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
        <button onClick={()=>deleteClassList(myClass.id)}>Delete</button>
        </div>
        </>
)
            }
