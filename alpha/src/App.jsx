import { useState } from "react";
import './App.css'

export default function main (){
  const[myCar ,setMyCar]=useState("Volvo")

    const handleChange = (event) =>{
      setMyCar (event.target.value)
    }

    return (
      <form>
        <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Flat">Flat</option>
        </select>
      </form>
    )

}