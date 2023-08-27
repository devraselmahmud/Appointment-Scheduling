import React from 'react'
import moment from 'moment'

const Error = () => {
  let start = moment('9:00', 'HH:mm').toString()
  // const time = moment(start).add(30, 'minutes').toString()
  // console.log("first addition",time)
  // console.log(start)
  // if(start>time){
  //   console.log('start is greater')
  // }else if(time>start){
  //   console.log('time is greater')
  // }
  const end = moment('17:00', 'HH:mm').toString()
  // const diff = moment(end).diff(moment(time), 'minutes')
  // const d = moment.duration(diff)
  // console.log('minute diff:',d)
  //time division


  for(let i=0; start<end; i++){
    start = moment(start).add(30, 'minutes').toString()
    console.log(start)
  }

  
    
  



  return (
    <div>
        <h1>
            Error Page
        </h1>
    </div>
  )
}

export default Error
