import React, { useContext, useState } from 'react'
import { NotesContext } from '../utils/NotesContext'

const AddTodo = () => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const {setNotes} = useContext(NotesContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(title+": "+ note)
        const formData={
            "title": title,
            "note":note
        }

       setNotes((prevNotes)=>[...prevNotes,formData])
       setTitle("")
       setNote("")
       // console.log(notes)
    }
    return (
        <div className='flex justify-center'>
                    <div className='text-center justify-center mt-2 border w-1/2 border-green-400 bg-red-100'>
            <div className=''>
                <div className=' bg-red-300'>
                    <h2 className='font-bold'>Add Todo</h2>
                </div>

                <div className='flex m-auto w-1/2 mt-2  bg-slate-300 rounded-lg '>
                    <form className=' flex flex-col w-full text-left m-2' onSubmit={handleSubmit}>
                        <input value={title} className='p-2 m-2' placeholder='Enter title of your note' onChange={(e)=>setTitle(e.target.value)} />
                        <input value={note} className='p-2 m-2' placeholder='Enter the note' onChange={(e)=>setNote(e.target.value)} />
                        <button className='border border-green-500 m-2 p-2 w-20 rounded-full text-center' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>

    )
}

export default AddTodo
