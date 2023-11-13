import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Cars} from "./Cars";

function App() {
    const students = [
        {id: 1, name: "Vit", age: 33},
        {id: 2, name: "Dima", age: 32},
        {id: 3, name: "Oleg", age: 45},
        {id: 4, name: "Kevin", age: 34},
        {id: 5, name: "Alex", age: 35},
        {id: 6, name: "Alex2", age: 35},
        {id: 7, name: "Max", age: 33},
        {id: 8, name: "Gil", age: 50},
        {id: 9, name: "Dil", age: 36}
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <div className="App">
            <NewComponent students={students}/>
            <Cars topCars={topCars}/>
        </div>
    )
}

export default App;
