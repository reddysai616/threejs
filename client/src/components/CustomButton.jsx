import React from 'react'
import State from '../store'
import { useSnapshot } from 'valtio'

export default function CustomButton({title , customStyles , handleClick ,type}) {
  const snap = useSnapshot(State)
  const generateSyle=(type) => {
    if(type ==='filed'){
      return{
        backgroundColor:snap.color,
        color:'#FFFFFF',
      }
    }
  }
  return (
    <>
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={generateSyle(type)} onClick={handleClick}>
        {title}
    </button>
    </>
  )
}
