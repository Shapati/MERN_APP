import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import styles from './Signup.module.css'
export const Signup = () =>{
  const navigate = useNavigate()
  const [pending,setPending] = useState(false)
  const [error,setError] = useState(null)
  const [form,setForm] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  })
  const {firstname,lastname,email,password} = form
  const onChange =(e)=>{
    setForm((prev)=>({
      ...prev,[e.target.name]: e.target.value
    }))
  } 
  const onSubmit = async (e)=>{
    e.preventDefault()
    setPending(true)
    try{
      
      const url = 'http://localhost:4001/api/users/signup'
      const response = await axios.post(url,form)
      if(response){
        navigate('/login')
        setForm({
          firstname:'',
          lastname:'',
          email:'',
          password:''
        })
      }
      console.log(response)
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
    <div className={styles.signup}>
      
      <div className={styles['signup-left']}>
        <h1> Track Your  Daily Activites With Shapadan</h1>
        <img src="./assets/illustration.svg" alt="" />
      </div>

      <form onSubmit={onSubmit} className={styles['signup-right']}>
        <div className="container">

    
      <h1>Create Your Account</h1>

        <div className={styles['form-group']}>

        <label >First name</label>
        <input 
        type="text"
        className="form-control"
        onChange={onChange}
        id="firstname"
        name='firstname'
        placeholder="First name" 
        value={firstname}
        />
        </div>
        <div className={styles['form-group']}>

        <label >Last name</label>
        <input 
        type="text"
        className="form-control"
        onChange={onChange}
        id="lastname"
        name='lastname'
        placeholder="Last name" 
        value={lastname}
        />
        </div>
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
        <p>Already have an account? <NavLink to='/login'>Sign In</NavLink></p>
        <div className={styles['form-group']}>
          {pending && <button type="submit" className={styles.btn} disabled><img src="./assets/loader.svg" alt="" /></button>}
          {!pending && <button type="submit" className={styles.btn}>Sign Up</button>}
        </div>
        </div>
      </form>
    </div>
  )
}

