import axios from 'axios'
import styles from './Login.module.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
export const Login = ({user,setUser,data,setData,setName}) =>{
  const [pending,setPending] = useState(false)
  const [error,setError] = useState(null)
  const [form,setForm] = useState({
 
    email:'',
    password:''
  })
  const navigate = useNavigate()
  const {email,password} = form
  const onChange =(e)=>{
    setForm((prev)=>({
      ...prev,[e.target.name]: e.target.value
    }))
  } 
  const onSubmit = async (e)=>{
    e.preventDefault()
    setPending(true)
    try{
      
      const url = 'http://localhost:4001/api/users/login'
      const response = await axios.post(url,form)
      console.log(response)
      if(response){
        navigate('/dashboard')
      }
      localStorage.setItem('token',response.data)
      localStorage.setItem('data',response.data.token)
      localStorage.setItem('name',response.data.firstname)

      setUser(localStorage.getItem('token'))
      setData(localStorage.getItem('data'))
      setName(localStorage.getItem('name'))
      console.log()
      console.log(user)
      console.log(data)
      setPending(false)
      setError(null)
    }
    catch(err){
      console.log(err.response.data)
      setError(err.response.data.message)
      setPending(false)
    }

  }

  return(
    <div className={styles.login}>
       <div className={styles['login-left']}>
        <h1>Be Able To Track Your  Daily Activites With Shapadan</h1>
        <img src="./assets/illustration.svg" alt="" />
      </div>

      <form onSubmit={onSubmit} className={styles['login-right']}>
        <div className="container">

    
      <h1>Login to Your Account</h1>

        
        <div className={styles['form-group']}>

        <label >Email</label>
        <input 
        type="email"
        className="form-control"
        onChange={onChange}
        id="email"
        name='email'
        placeholder="Email" 
        value={email}
        />

        </div>

        <div className={styles['form-group']}>
          
        <label >Password</label>
        <input 
        type="password"
        className="form-control"
        onChange={onChange}
        id="password"
        name='password'
        placeholder="Password" 
        value={password}
        />
        </div>

        {error && <p className={styles.error}>{error}</p>}
        <p>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></p>
        <div className={styles['form-group']}>
        {pending && <button type="submit" className={styles.btn} disabled><img src="./assets/loader.svg" alt="" /></button>}
          {!pending && <button type="submit" className={styles.btn}>Sign In</button>}
        </div>
        </div>
      </form>
    </div>
  )
}