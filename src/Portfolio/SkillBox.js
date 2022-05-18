import React from 'react'
import './SkillBox.css'


function SkillBox({name,percentage}) {
  return (
    <div className='skillBox'>
      
      <div className='name'>
      <h2>{name}</h2>
      </div>

      <div className='percent'>
      <h2>{percentage}%</h2>
      </div>
    </div>
  )
}

export default SkillBox
