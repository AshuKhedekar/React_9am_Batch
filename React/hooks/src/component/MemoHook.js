import React , {useState,useMemo,useEffect} from 'react';
export default function MemoHook(){
    const [number , setNumber] = useState(0);
    const [dark , setDark] = useState(false);
    const doubleNumber = useMemo(()=>{
     return slowFunction(number);
    },[number])
    
    
const themeStyle = useMemo(()=>{
  return {  
    backgroundColor: dark? 'black':'white', 
    color:dark? 'white':'black'
}
},[dark]);
useEffect(()=>{
  console.log("theme changed");
},[themeStyle]);
 
    return (
        <div>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
<button onClick={()=>setDark(!dark)}>Change Theme</button>
<div style={themeStyle}>{doubleNumber}</div>
        </div>
    )
}
function slowFunction(num){
    console.log("calling slow function");
    for(let i = 0;i<=1000000000; i++){}
    return num * 2;
    }