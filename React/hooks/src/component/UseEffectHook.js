import './App.css';
import React,{useState,useEffect} from 'react'
import  {A}  from './component/A';
const names = ["Eric","react","butters"];
function Bcomponent() {
  const [index,setIndex] = useState(0);

  useEffect(()=>{
if(index === names.length-1){
  return ;
}
setTimeout(()=>setIndex(index+1),1000);

  },[index]);

  return <A name={names[index]}/>
   
 
}

export default Bcomponent;
