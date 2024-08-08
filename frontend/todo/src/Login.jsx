import React, { useState,useRef, useContext } from 'react';
import { UserContext } from '../context/userContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userRef = useRef();
  const passRef = useRef();

  const {home ,setHome}= useContext(UserContext)

  
  const handleSubmit = async  (e) => {
    e.preventDefault();
    // Here, you can add your login logic
    setUsername(userRef.current.value);
    setPassword(passRef.current.value);
    const formData = {
        username: username,
        password: password,
      };
    try {
        const response = await fetch('http://localhost:3000/login', {
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
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passRef}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
