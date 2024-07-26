import React from 'react'

const Nav = () => {
  return (
    <div className='flex'>
        <div>Home</div>
        <div className='hover:text-yellow-500'>Skills</div>
        <div>Education</div>
        <div>Projects</div>
    </div>
  )
}

export default Nav