import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

const App = () => {
const [users , setUsers]= useState([])
const [error , setError]= useState(null)

const DOMAIN = "https://backend-project-1-1qj9.onrender.com"
useEffect(()=>{
  const getUsers = async () => {
    try{
      const res = await fetch(`${DOMAIN}/api/users`)
      if (!res.ok) throw new Error("failed to get users")
      const data = await res.json()
      setUsers (data.users)
    }catch(error){
      setError (error.message)
    }
}
 getUsers()
},[])

  return (
    <div>
      <Navbar/>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  )
}

export default App
