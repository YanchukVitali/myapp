import React from "react";

type CarsType = {
    topCars: CarsNameType[]
}
type CarsNameType = {
    manufacturer: string
    model: string | number
}
export const Cars = (props: CarsType) => {

    return (
        <table>
            {props.topCars.map((ObjectFromCarsNameType, element)=>{
                return (
                    <div>
                        <tr key={ObjectFromCarsNameType.model}>
                            <th>{ObjectFromCarsNameType.manufacturer}</th>
                            <th>{ObjectFromCarsNameType.model}</th>

                        </tr>
                    </div>

                )
            })}
        </table>
    )
}

