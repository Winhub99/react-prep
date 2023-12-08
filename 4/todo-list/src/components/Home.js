import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { NotesContext } from '../utils/NotesContext'
import Note from './Note'

const Home = () => {
  const {notes} = useContext(NotesContext)
  return (
    <div>
      <div className='flex m-1'>
        <div className='w-32 mt'>
                <Link to={"/add-todo"}>
            <img alt='Add-todo ' className='w-24 m-2' src='https://tse4.mm.bing.net/th?id=OIP.BAIAydy4x8FrjK23l7B1ywHaHa&pid=Api&P=0&h=180' />
          </Link>
        </div>
        <div className="font-bold w-1/2  bg-slate-300">
                <div>
                    {notes.map((note)=>{
                    const id= parseInt(Math.random()*1000)
                    note.nId=id
                    //console.log("The unique id of note is: "+ note.nId)
                    return <Note key={id}  data={note}/>})}  
                </div>
        </div>
      </div>
    </div>
  )
}

export default Home
