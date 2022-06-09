import axios from 'axios'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
export const Dashboard = ({data,setUser,user,name})=>{

 

  const logout= ()=>{

    setUser(localStorage.removeItem('token'))
  
  }

  const [list,setList] =useState(null)

const API_URL='http://localhost:4001/api/docs/'


const getData= async()=>{

const config={

  headers:{
    Authorization: `Bearer ${data}`
  }
}

  const response = await axios.get(API_URL,config)
  setList(response.data)
  console.log(response)
}

 useEffect(()=>{
   getData()
 },[])

  
  return(
    <div>

    
  
    <div className="nav">
      <h1>Dashboard</h1>
      <div className="navlinks">
  
      
      {user && <NavLink to='/' onClick={()=>logout()} > logout </NavLink>}        
     <p> Welcome {name}! </p>     
     
  
      </div>

        

      </div>

      {list && list.map((a,b)=>(
          <p>{a.text}</p>
        ))}



    </div>
  )
}


