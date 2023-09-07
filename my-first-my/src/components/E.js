import React, { useContext } from 'react';
import { context } from '../App';
export const E = () => {
const ctx = useContext(context);
  return (
    <div>E Component : {ctx}</div>
  )
}
