import React from 'react';

const Home = () => {

  return (
    <div>
      <h1>Welcome, <span>User</span>!</h1>
      <div className='schedule'>
            <button className='btn'>Upcoming Schedule</button>
            <button className='btn'>Past Schedule</button>
        </div>
        
    </div>
  )
}

export default Home