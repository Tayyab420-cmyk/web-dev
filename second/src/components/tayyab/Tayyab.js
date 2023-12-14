import React from 'react'
import './Tayyab.css';
export const Tayyab = (props) => {
  return (
    <>
    <div className='T'>Tayyab</div>
    <h1>Ahmad</h1>
    <h1 className='A'> {props.abc} </h1>
    <button onClick={props.clik}>my button</button>
    
    </>

  )
}
