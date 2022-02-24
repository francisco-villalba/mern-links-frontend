import React, { useEffect } from 'react'
import { getData } from '../api'
import Links from '../components/Links'
import Sidebar from '../components/Sidebar'
import { useGlobalContext } from '../context'
import Message from '../components/Message'

const Dashboard = () => {
  const { dispatch, loading, setLoading, message, setMessage } = useGlobalContext()

  useEffect( () => {
      const fetchData = async() => {
        try {
          const res = await getData()
          dispatch({ type: 'INDEX', data: res.data })
          setLoading(false)
        } catch (error) {
          setMessage(error.response?.data.error || 'Something went wrong')
          setLoading(false)
          setTimeout(() => {
            setMessage(null)
          }, 5000);
        }
      }
      fetchData()
  }, [setLoading, dispatch, setMessage])
  
  return (
    <div className='container'>
      {
        !loading && !message &&
        <>
          <Sidebar />
          <Links />
        </>
      }
      { message && <Message message={message}/>}
    </div>
  )
}

export default Dashboard