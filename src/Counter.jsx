import { useState } from "react"
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("Hi");
    return(<>
    <input type = "text" 
        value = {value} 
        onChange={e=>setValue(e.target.value)}/><p>{value.length} char</p> 
    <h3>U said {value} ?</h3>
    <button onClick={()=> setCount(count+1)}>KICK HIM</button>
    <button onClick={()=> setCount(0)}>I'm healing</button>
    <p>U kick me {count} time !!!</p>
    
    </>)
}