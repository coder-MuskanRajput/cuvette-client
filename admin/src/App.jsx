import React, { useEffect } from 'react'
import Navbar from './layouts/Navbar'
import AuthenticationForm from './pages/AuthenticationForm'
import {Route, Routes} from 'react-router-dom'
import routes from './routes/routes'
import { getUserDetailsAPI } from './helper/authAPI'
import { useDispatch } from 'react-redux'
const App = () => {

  const dispatch = useDispatch()
  

  useEffect(() => {
    getUserDetailsAPI(dispatch)
  }, [])
  
  return (
    <div>
      <Navbar/>
      
      <Routes>
        {routes.map((route)=>{
          const { path, component: Component, props } = route
          return (
            <Route path={path} key={path} element ={<Component {...props} />} />
          )
        })}
      </Routes>

    </div>
  )
}

export default App