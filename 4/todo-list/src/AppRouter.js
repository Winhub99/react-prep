import React, { useState } from 'react'
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './components/Home'
import AddTodo from './components/AddTodo'
import { NotesContext } from './utils/NotesContext'
import Header from './components/Header'
import UpdateNote from './components/UpdateNote'

const AppRouter = () => {
    const [notes, setNotes] = useState([])
    return (
        <div>
            <Router>
                <NotesContext.Provider value={{ notes, setNotes }}>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <Header />
                                <Outlet/>
                            </>
                        }>
                        <Route path='/' element={<Home />} />
                        <Route path='add-todo' element={<AddTodo />}/>
                        <Route path='update/:id' element={<UpdateNote/>}/>
                        </Route>
                    </Routes>
                </NotesContext.Provider>
            </Router>

        </div>
    )
}

export default AppRouter
