import React from 'react';
import '../component/css/style.css';
// import styles from '../component/css/styles.module.css';
import styled from 'styled-components';
export const ChildComponent = ({onIncrement}) => {
  // const styles = {
  //   main:{
  //    backgroundColor:"#f1f1f1",
  //    width:"100%",
  //   },
  //   text:{
  //     margin:"12px",
  //     color:"red",
      
  //   },

  // }

  const Wrapper = styled.div`
  width:100%;
  height:100px;
  padding:30px;
  background-color:gray;
  `;

    debugger;
    console.log("child called")
  return (
    <>
      
        {/* <h1 className='text' style={styles.text}>ChildComponent</h1> */}

        {/* <h1 className={styles.font} >ChildComponent</h1> */}
        {/* <button onClick={onIncrement} className='main' style={styles.main}>Increment Count</button> */}

        <h1 >ChildComponent</h1>
    <Wrapper/>

        <button onClick={onIncrement} className='main' >Increment Count</button>

{/* ---> inline styling in css */}
{/* <button onClick={onIncrement} className='btn' style={{color:"blue"}}>Increment Count</button> */} 
    </>
  )
}
