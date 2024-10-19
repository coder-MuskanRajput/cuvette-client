import React from 'react'
import Button from '../components/form-components/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()

  return (
    <div className='w-full p-5'>
        <Button onClick={()=> navigate('/create-interview')} >Create Interview</Button>

    </div>
  )
}

export default Dashboard