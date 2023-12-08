import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NotesContext } from '../utils/NotesContext'

const UpdateNote = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    console.log("The id of the note is: "+  id)
    const {notes,setNotes} = useContext(NotesContext)
    const oldNote =notes.find(note=>note.nId===parseInt(id))

    const [formData,setFormData] = useState({
        title:oldNote.title,
        note:oldNote.note
    })
    function handleSubmit(){
        console.log("i'm called")
        const indexToUpdate = notes.findIndex(note => note.nId === parseInt(id))
        if(indexToUpdate !== -1){
            const updateNotes = [...notes]
            updateNotes[indexToUpdate]=formData
            setNotes(updateNotes)
            navigate("/")
        }else{
            console.log("Note not found!")
        }
        
    }
    
    function handleInputChange(e){
        const {name,value} = e.target
        setFormData({...formData, [name]:value})
    }
    
  return (
    
    <div className='flex justify-center'>
                    <div className='text-center justify-center mt-2 border w-1/2 border-green-400 bg-red-100'>
            <div className=''>
                <div className=' bg-red-300'>
                    <h2 className='font-bold'>Update Todo</h2>
                </div>

                <div className='flex m-auto w-1/2 mt-2  bg-slate-300 rounded-lg '>
                    <form className=' flex flex-col w-full text-left m-2' onSubmit={()=>handleSubmit()}>
                        {console.log("the old value is:"+ oldNote.title)}
                        <input value={formData.title} className='p-2 m-2' name='title' onChange={handleInputChange}   />
                        <input value={formData.note} className='p-2 m-2' name='note' onChange={handleInputChange} />
                        <button className='border border-green-500 m-2 p-2 w-20 rounded-full text-center' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
  )
}

export default UpdateNote
