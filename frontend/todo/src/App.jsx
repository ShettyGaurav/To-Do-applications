import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Login'
import RegisterPage from './Register'
import Todo from './Todo'
import { UserContext } from '../context/userContext'
function App() {
    const {home,setHome} = useContext(UserContext)
    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)

  return (
    <>
    {home?<Todo/>:<></>}
    {home?<></>:<button onClick={()=>{setIsRegister(true);setIsLogin(false)}}>New User?Register Here</button>}
    {home?<></>:<button onClick={()=>{setIsLogin(true);setIsRegister(false)}}>Want to login</button>}
    
    {isLogin && !home? <LoginPage/>:<></>}
    {isRegister && !home? <RegisterPage setIsRegister={setIsRegister}/>:<></>}

    </>
  )
}

export default App
