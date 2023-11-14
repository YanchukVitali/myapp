import React from "react";

type CarsType = {
    topCars: CarsNameType[]
}
type CarsNameType = {
    manufacturer: string
    model: string | number
    id: number
}
export const Cars = (props: CarsType) => {

    return (
        <table>
            {props.topCars.map((ArrayCarsNameType, index)=>{
                debugger
                return (
                    <div>
                        <tr key={ArrayCarsNameType.id}>
                            <th>{ArrayCarsNameType.manufacturer}</th>
                            <td>{ArrayCarsNameType.model}</td>

                        </tr>
                    </div>

                )
            })}
        </table>
    )
}

