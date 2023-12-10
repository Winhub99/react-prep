import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ACCESS_HEADER, OWNER, REPO_NAME } from '../utils';
import Cat from './Cat';


const Home = () => {
console.log("rendering home...")
  const [cats,setCats] = useState([]);
  const fetchData= async ()=>{
    const data =await fetch("https://api.freeapi.app/api/v1/public/cats",{

    })
    const jsonData = await data.json()
    console.log(jsonData?.data?.data[0].name)
    setCats(jsonData?.data?.data)
    console.log(cats[0])
    

  }
    useEffect(()=>{
   //   console.log("Hello from inside useEffect")
   
    fetchData()
    },[])

    if(cats===null){
      return <div>Loading...</div>
    }
  return (
    <>
    <div className=''>
      <nav>
        <ul  style={{display:"flex",flexDirection:"row",listStyle:"none"}}>
           <Link to="mainContent"><li>MainContent</li></Link>
            <Link to="about"><li>About</li></Link>
        </ul>
      </nav>
    </div>
    <div style={{display:"flex", flexWrap:"wrap"}}>
        {cats.map(cat=>(<Cat key={cat.id} data={cat}/>))}
        
        
    </div>
    </>
  )
}

export default Home