import React from "react";


type NewComponentType = {
    /*    students: Array<StudentType> or like this   */
    students: StudentType[]
}
type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent = (props: NewComponentType) => {


    return (
        <ul>
            {props.students.map((ObjectFromStudentType, index) => {

                return (
                    <li key={ObjectFromStudentType.id}>
                        <span> {ObjectFromStudentType.name}</span>
                        <span> {ObjectFromStudentType.age}</span>
                    </li>
                )
            })}
        </ul>


    )

}