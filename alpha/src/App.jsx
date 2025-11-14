import { useState } from "react";
import './App.css'

export default function main (){

  const [inputs,setInputs]=useState({});

    const handlechange = (e) =>{
          const name=e.target.name;
          const value=e.target.value;
          setInputs(values=>({...values,[name]:value}))
    }


    return (
      <form>
          <label>First name:
            <input 
              type="text"
              name="firstname"
              value={inputs.firstname}
              onChange={handlechange}
            />
          </label>
          <label>Last Name:
              <input 
                type="text"
                name="lastname"
                value={inputs.lastname}
                onChange={handlechange}
              />
          </label>
      <p>current values : {inputs.firstname} {inputs.lastname}</p>
      </form>
    )

}