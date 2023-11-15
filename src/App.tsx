import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Cars} from "./Cars";
import {log} from "util";
import {Button} from "./components/Button";

function App()  {
    /*   const students = [
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
           {id: 1,manufacturer: 'BMW', model: 'm5cs'},
           {id: 2,manufacturer: 'Mercedes', model: 'e63s'},
           {id: 3,manufacturer: 'Audi', model: 'rs6'}
       ]*/
    const Button1Vit = (subscriber:string, age:number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Vit = (subscriber:string) => {
        console.log(subscriber)
    }
    const Button3Vit =()=>{
        console.log("I am stupid Button ")
    }

    return (
        <div className="App">
            {/* <NewComponent students={students}/>
            <Cars topCars={topCars}/>*/}
            {/*<NewButton/>*/}
            <Button name={"Favorite-1"} callBack={()=>Button1Vit("I am Vit", 21, "Live in Boston")}/>
            <Button name={"Favorite-2"} callBack={()=>Button2Vit("I am Anna")}/>
            <Button name={"Stupid Button"} callBack={Button3Vit}/>
        </div>
    )
}


/*const NewButton = () => {
       const myFirstFollower = (event: React.MouseEvent<HTMLButtonElement>) => {
           console.log("Hello Vit")
       }
       const mySecondFollower = (event: React.MouseEvent<HTMLButtonElement>) => {
           console.log("Hello Ivan")
       }
        const onClickHandler =(name:string) => {
            console.log(name)
        }

    return (
        <div className={"NewButton"}>
            {/!*<button onClick={(event) => {console.log("Hello")}}>NewButton</button>*!/}
            {/!*<button onClick={myFirstFollower}>NewButton-2</button>
            <button onClick={mySecondFollower}>NewButton-3</button>*!/}
            {/!*  <button onClick={(event: React.MouseEvent<HTMLButtonElement>)=>onClickHandler("Vit")}>NewButton-2</button>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>)=>onClickHandler("Ivan")}>NewButton-3</button>*!/}
            <button>FirstButton</button>
            <button>SecondButton</button>

        </div>
    )
}*/
export default App;
