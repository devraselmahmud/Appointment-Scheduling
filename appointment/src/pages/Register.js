import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    // const [data, setData] = useState('')

    const handleSubmit = (e) => {
        console.log('clicked');
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password_confirmation = e.target.password_confirmation.value;
        const appointment = e.target.appointment.value;

        const data = {
            firstName,
            lastName,
            username,
            email,
            password,
            password_confirmation,
            appointment
        }
        console.log('clicked')

        try{         
            fetch('http://localhost:3333/register',{
               method: 'post',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
        //    .then(response => response.json())
        //    .then(res => console.log(res))

       }catch(err){
           console.log(err)
       }

    }



  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
            <div style={{margin: '10px'}} className='form-field'>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='first'>First Name</label>
                    <input type='text' name='firstName' id='first' required placeholder='First Name' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='last'>Last Name</label>
                    <input type='text' name='lastName' id='last' required placeholder='Last Name' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' required placeholder='Username' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' required placeholder='Email' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' required placeholder='Password' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='password_confirmation'>Confirm Password</label>
                    <input type='password' name='password_confirmation' id='password_confirmation' required placeholder='Confirm Password' className='input-form'/>
                </div>

                <div style={{margin: '10px'}} className='form-field'>
                    <label htmlFor='appointment'>Appointment</label>
                    <input type='text' name='appointment' id='appointment' required placeholder='Appointment' className='input-form'/>
                </div>

            <button style={{color: 'white', backgroundColor: 'green', padding: '10px', borderRadius: '10px'}} >Sign Up</button>
            </div>

        </form>
        <h2>Aready a user? <Link style={{textDecoration: 'none'}} to='/login'>Login</Link></h2>
    </div>
  )
}

export default Register