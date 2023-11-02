import React ,{useEffect}from 'react'

export const A = ({name}) => {
    
    // const {name} = props;
    const message = `Hello ${name}!`;
    useEffect(()=>{
       
document.title = 'Greetings page';
// console.log(document.title)
console.log('mounting')
    },[]);
  return (
    <div>
        {message}
    </div>
  )
}
