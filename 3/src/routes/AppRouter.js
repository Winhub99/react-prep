import React from 'react'
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import LiveChat from '../components/LiveChat'
import WatchPage from '../components/WatchPage'

const AppRouter = () => {
    return (
        <div>
            This is App router
            <Router>
                <Routes>
                    <Route path='/' element={<AppLayout />} >
                        <Route path='/' element={
                            <>
                                <Outlet />
                                <MainContent />
                            </>
                        }>
                            <Route path='/' element={<Sidebar />} />
                            <Route path='/live' element={<LiveChat />} />
                        </Route>
                        <Route path='view' element={<WatchPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter
