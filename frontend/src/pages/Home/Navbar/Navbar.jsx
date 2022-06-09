import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = ({setUser,user})=>{
  
  

  const logout= ()=>{

    setUser(localStorage.removeItem('token'))
  
  }

  return(
    

    <div className="nav">
      <h1>Home</h1>
      <div className="navlinks">
     
      {user && <NavLink to='/login' onClick={()=>logout()} > logout </NavLink>}        
      {user && <NavLink to='/dashboard' > Dashboard </NavLink>}
             
      {!user &&(<div> <NavLink to='/signup'>signup </NavLink> 
                       <NavLink to='/login'>login</NavLink>
                       
                </div>)}

      </div>
    </div>
  )
}
