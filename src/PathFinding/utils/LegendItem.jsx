import React from 'react'

const LegendItem = ({ name, color }) => {
  return (
    <div style={{color: 'white', display: 'inline-block', margin: '20px', textAlign: 'center'}}>
      <div style={{backgroundColor: color, width: '20px', height: '20px'}}></div>
      {name}
    </div>
  )
}

export default LegendItem
