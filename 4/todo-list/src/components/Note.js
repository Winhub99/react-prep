import React, { useContext } from 'react'
import { NotesContext } from '../utils/NotesContext'
import { Link } from 'react-router-dom'

const Note = (props) => {
    const { title, note,nId } = props.data
    const {notes,setNotes} = useContext(NotesContext)
    
    const deleteNote=(id)=>{
        const newNotes= notes.filter(note=>{
            return note.nId !==id
        } )           
        setNotes(newNotes)

    }
    return (
        <div className='m-1 p-1  shadow-md flex justify-between'>
            <div className='w-11/12'>
                <h2 className='font-black text-xl'>{title}</h2>
                <p className='font-extralight text-lg'> {note}</p>
            </div>
            <div>
                <span ><Link to={"update/"+nId}> <img className='w-6 cursor-pointer' alt='edit' src='https://tse1.mm.bing.net/th?id=OIP.yfZbax4hNqeuRDkhRtBUlQAAAA&pid=Api&P=0&h=180'/></Link></span><br />
                <span >
                    <img className='w-6 cursor-pointer' alt='delete-icon ' src='https://tse1.mm.bing.net/th?id=OIP.E7JkNWQZ5fzET8SO6RRswQHaHa&pid=Api&P=0&h=180' onClick={()=>deleteNote(nId)}/>
                </span>
            </div>
        </div>
    )
}

export default Note
