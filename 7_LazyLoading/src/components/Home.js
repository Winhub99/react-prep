import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className=''>
      <nav>
        <ul  style={{display:"flex",flexDirection:"row",listStyle:"none"}}>
           <Link to="mainContent"><li>MainContent</li></Link>
            <Link to="about"><li>About</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Home
