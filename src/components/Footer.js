import React from 'react'

const Footer = () => {
  return (
    <div><button className='bg-black py-2 px-4 text-white text-xl rounded-lg' onClick={()=>{window.location.replace('/')}}>RESTART</button></div>
  )
}

export default Footer