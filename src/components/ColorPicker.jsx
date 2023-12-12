import React from 'react'

function ColorPicker() {
    const snap=useProxy(state)
  return (
    <div style={{display:snap.current ? "black" : "none"}}>
      
    </div>
  )
}

export default ColorPicker
