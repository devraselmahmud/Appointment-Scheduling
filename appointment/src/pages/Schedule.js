import React from 'react'
import {Link} from 'react-router-dom'


const Schedule = () => {
  return (
    <div style={{margin: '10px'}}>
        <h2>Schedule</h2>

        <button><Link to='/schedule-info' style={{ textDecoration: 'none' }}>+ Create Schedule</Link></button>
    </div>

  )
}

export default Schedule