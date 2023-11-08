import React,{useState,useCallback} from "react";
import { ChildComponent } from "./ChildComponent";
function MyComponent() {
    debugger;
    console.log("parent called")
    const [count ,setCount] = useState(0);

    const  handleIncrement = useCallback(()=>{
        setCount(prevCount => prevCount +1 );
    },[]) 
       
    
  return <div>

  <p>count : {count}</p>
  <ChildComponent onIncrement={handleIncrement}/>
  </div>;
}
export default MyComponent;