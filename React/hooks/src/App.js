import React from 'react'
// import MemoHook from './component/MemoHook';
// import MyComponent from './component/UsecallbackHook';
import { ChildComponent } from './component/ChildComponent';
import { ReducerHook } from './component/ReducerHook';

// import Bcomponent from './component/Useeffecthook';

function App() {
  debugger;
  console.log("app called");
  return (
    <div>
      {/* <Bcomponent/> */}
{/* <MemoHook/> */}
{/* <MyComponent/> */}
<ChildComponent/>
<ReducerHook/>
    </div>
  )

}

export default App;
