import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const CreateSchedule = () => {
  // let mo = moment().add(15, 'minutes').format("h:mm a");

  // console.log(mo);

  let startDate  = new Date(2022,11,1, 9, 25);
  let endDate = new Date(2022,11,1, 17, 0);
  var diff = endDate.getTime() / 1000 - startDate.getTime() / 1000;
  console.log(diff);

  // const day = moment().startOf('day').fromNow();
  // console.log(day);



  // const time = new Date().getTime()
  // console.log(time)

    const momen = moment().subtract(1, 'days');
    // console.log(momen);

    const tileDisabled = ({ activeStartDate, date, view }) => {
      return date < momen;
   }
  
    // const yesterday = moment().subtract(1, 'day');
  // console.log(yesterday);
  
  // const date = new Date();
  // const day = new Date().getDate();
  // console.log(day)
  
    // const disablePastDates = current =>{
    //   return current.isAfter(yesterday)
    // }
  
    const [date, setDate] = useState(new Date());
    const onDateChange = (newDate) => {
      setDate(newDate);
      console.log(newDate);
    }
  
    return (
      <div>
        <h1>Our Calender</h1>

            <div className='create-schedule'>
                      <div>
                        <h2>Meeting</h2>
                        <h3><span>45</span> Min</h3>
                      </div>

                      <div className="calender">
                              <Calendar
                              onChange={onDateChange}
                              value={date} tileDisabled={tileDisabled} />
                      </div>

                      <div>
                        <p><span>Tuesday</span>, <span>December</span> <span>6</span></p>

                        <div className="time">

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }} ><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>10:00am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>10:45am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>11:30am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>12:15am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>1:00am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>1:45am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>2:30am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>3:15am</span></Link></button>

                            <button className='time-table' onClick={()=>{
                              window.confirm('Are you sure you want to book this time?')
                            }}><Link to='/confirm-page' style={{textDecoration: 'none'}}><span>4:00am</span></Link></button>
                          
                        </div>


                      </div>

            </div>
          
          
      </div>
    )
  }

export default CreateSchedule