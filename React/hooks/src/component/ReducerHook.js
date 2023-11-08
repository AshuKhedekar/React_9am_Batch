import React,{useReducer} from 'react'
const initialState = {
    count:0
};
function reducer(state, action){
    switch (action.type){
        case 'increment':
            return {
                count : state.count +1
            };
        case 'decrement':
            return {count : state.count - 1};
            default:
                throw new Error();
    }
}
export const ReducerHook = () => {
const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h2>ReducerHook</h2>
      count : {state.count}
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
  )
}