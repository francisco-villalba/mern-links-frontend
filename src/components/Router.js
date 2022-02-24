import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Dashboard from '../pages/Dashboard'
import Index from '../pages/Index'
import Profile from '../pages/Profile'
import Message from './Message'
import Navbar from './Navbar'

const Router = () => {
  const { state, loading, message } = useGlobalContext()
  
  return (  
      <BrowserRouter>
        <Navbar /> 
        { loading &&  <AiOutlineLoading3Quarters className='loading' /> }
        { message &&  <Message message={message} /> }
        <Routes>
          <Route exact path='/' 
            element={!state.isLoggedIn ? <Index /> : <Navigate replace to='/dashboard'/>} />
          <Route path='/dashboard' 
            element={state.isLoggedIn ? <Dashboard /> : <Navigate replace to='/'/>} />
          <Route path='/:id' 
            element={<Profile />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router