import React, { useState,useRef,useContext } from 'react';
import { UserContext } from '../context/userContext';
const RegisterPage = ({setIsLogin}) => {
  
  const regUserRef=useRef()   
  const regPassRef=useRef()
  const regEmailRef=useRef()
  const {home ,setHome}= useContext(UserContext)


  const handleSubmit =async (e) => {
    
    e.preventDefault();
    const formData={
        username:regUserRef.current.value,
        password:regPassRef.current.value,
        email:regEmailRef.current.value,
    }
    // Here, you can implement the logic to send the form data to your server


    try {
        const response = await fetch('http://localhost:3000/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully!');
          setHome(true)
        } else {
          console.error('Error submitting form:', response.status);
        
        }
      } catch (error) {
        console.error('Error:', error);
      }
      if(FormData.username){
        if(password){
            if(email){
                setIsLogin(true)
            }
        }
    }
};

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={regUserRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={regEmailRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={regPassRef}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>

      
    </div>
  );
};

export default RegisterPage;
