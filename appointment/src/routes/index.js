import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//pages
import Home from '../pages/Home'
import Schedule from '../pages/Schedule'
import ScheduleConfirmation from '../pages/ScheduleConfirmation'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '../pages/Error'
import Navbar from '../layout/Navbar'
import Protected from './Protected'
import CreateSchedule from '../pages/CreateSchedule'
import ScheduleInfo from '../pages/ScheduleInfo'
import { Provider } from 'react-redux'
import store from '../app/store'

const Index = () => {

  return (
    <Provider store={store}>

    <BrowserRouter>
    <Navbar />

    
    <Routes>

       <Route path='/' element={<Home />} /> : <Route path='/' element={<Login />} />

        <Route path='/confirm-page' element={ 
        <Protected>
          <ScheduleConfirmation />

        </Protected> } />

        <Route path='/schedule' element={<Schedule />} />

        <Route path='/create-schedule' element={
          // <Protected>
            
          <CreateSchedule />

        // </Protected>
        } />

        <Route path='/schedule-info' element={
          <ScheduleInfo />
          
        } />

        
        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/*' element={<Error />} />


    </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default Index