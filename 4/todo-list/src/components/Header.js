import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
            <h2 className='w-full h-10 py-2 px-4 bg-pink-300 font-bold text-xl '><Link to={"/"}>TodoList</Link></h2>

    </div>
  )
}

export default Header
