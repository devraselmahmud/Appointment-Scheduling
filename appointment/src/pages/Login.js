import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { login } from '../features/userSlice';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   console.log('submitting');
  //   e.preventDefault();

  //   const data = dispatch(login({
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //     // loggedIn: true,
  //   }))
  //   try{
  //           fetch('http://localhost:3333/login',{
  //              method: 'post',
  //              headers: {
  //                  'content-type': 'application/json'
  //              },
  //              body: JSON.stringify(data)
  //          })
  //          .then(response => response.json())
  //          .then(res => {
  //           console.log('success', res);
  //          })

  //      }catch(err){
  //          console.log(err)
  //      }

  // }

  // const [data, setData] = useState('')

  // const handleSubmit = (e) => {
  //     console.log('clicked');
  //     e.preventDefault();

  //     const email = e.target.email.value;
  //     const password = e.target.password.value;

  //     const data = {
  //         email,
  //         password
  //     }

  //     console.log('clicked')

  //     try{
  //       fetch('http://localhost:3333/login',{
  //          method: 'post',
  //          headers: {
  //              'content-type': 'application/json'
  //          },
  //          body: JSON.stringify(data)
  //      })
  //      .then(response => response.json())
  //      .then(res => {
  //       console.log('success', res);
  //       // window.location.href = '/home';

  //      })

  //  }catch(err){
  //      console.log(err)
  //  }

  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (localStorage.getItem("user-info")) {

    }
  })
  const handleSubmit = async (e) => {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));


  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div style={{ margin: "10px" }} className="form-field">
            <div style={{ margin: "10px" }} className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="input-form"
              />
            </div>
            <div style={{ margin: "10px" }} className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-form"
              />
            </div>
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <h2>
        Not a user?{" "}
        <Link style={{ textDecoration: "none" }} to="/register">
          Register
        </Link>
      </h2>
    </div>
  );
};

export default Login;
