import React from 'react'
// import moment from 'moment'

const ScheduleInfo = () => {

    
    
    // let start = moment('9:00', 'HH:mm').toString()
    // const end = moment('17:00', 'HH:mm').toString()

    // for(let i=0; start<end; i++){
    //     start[i] = moment(start).add(15, 'minutes').toString()
    //     console.log(start)
    //   }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const day = document.getElementById('day')
    day.map((d) => {
        console.log(d)
        return d
    })

        console.log('clicked');

        const eventName = e.target.name.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const link = e.target.link.value;
        const dayName = e.target.days.value;
        // arrDays[arrDays.length] = dayName;
        // for(let i=0; i<7; i++){
        //     dayName[i] = e.target.days.value;
        // }

        const hours = e.target.appt.value;
        const duration = e.target.duration.value;
        console.log(dayName)

        const data = {
            eventName,
            location,
            description,
            link,
            dayName,
            hours,
            duration
        }

        try{         
            fetch('http://localhost:3333/schedule-info',{
               method: 'post',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(response => response.json())
           .then(res => console.log(res))

       }catch(err){
           console.log(err)
       }

    }




  return (
    <div>
        <h1>ScheduleInfo</h1>
        
        <form onSubmit={handleSubmit}>
            <div style={{margin: '10px'}} className='form-field'>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='name'>Event Name</label>
                    <input type='text' name='name' id='name' required placeholder='Event Name' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='location'>Location</label>
                    <select name='location' id='location' className='input-form'>
                        <option value="google-meet">Google Meet</option>
                        <option value="in-person">In Person</option>
                        <option value="zoom">Zoom</option>
                        <option value="microsoft-teams">Microsoft Teams</option>
                        <option value="phone-call">Phone Call</option>
                        <option value="custom">Custom</option>

                    </select>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='description'>Description</label>
                    <textarea rows={9} cols={30} type='text' name='description' id='description' placeholder='Description' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='link'>Event Link</label>
                    <p>example.com/user/</p>
                    <input type='link' name='link' id='link' required placeholder='Event Link' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='days'>Working Days</label>
                    <select name='days' id='days' multiple className='input-form'>
                        <option  value="saturday" name='days[]'>Saturday</option>
                        <option value="sunday" name='days[]'>Sunday</option>
                        <option value="monday" name='days[]'>Monday</option>
                        <option value="tuesday" name='days[]'>Tuesday</option>
                        <option value="wednesday" name='days[]'>Wednesday</option>
                        <option value="thursday" name='days[]'>Thursday</option>
                        <option value="friday" name='days[]'>Friday</option>

                    </select>

                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='appt'>Start Working Hours</label>
                    <input type="time" id="appt" name="appt" className='input-form'/> 
                    <p>to</p> 
                    <label htmlFor='appt'>End Working Hours</label>
                    <input type="time" id="appt" name="appt" className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='duration'>Meeting Duration in Minute</label>
                    <input type='text' name='duration' id='duration' placeholder='Duration' className='input-form'/>
                </div>


            <button style={{color: 'white', backgroundColor: 'green', padding: '10px', borderRadius: '10px'}}>Save</button>
            </div>

        </form>
    </div>
  )
}

export default ScheduleInfo