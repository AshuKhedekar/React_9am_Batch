import  React, { createContext } from 'react';
import './App.css';
import { A } from './components/A';
import { B } from './components/B';
import { C } from './components/C';
import { E } from './components/E';
export let context =  createContext();
function App() {
  return (
    <div>
      <context.Provider value={"sachin"}>
      <A/>
      <B/>
      <C/>
      <E/>

      </context.Provider>
    </div>
  );
}

export default App;
