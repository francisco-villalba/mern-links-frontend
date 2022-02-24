import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { Brand, List, Wrapper } from './Navbar.styles'


const Navbar = () => {
  const { dispatch, state, loading, setLoading } = useGlobalContext()
  const location = useLocation()

  const handleLogout = () => {
    setLoading(true)
    dispatch({ type: 'LOGOUT' })
    setLoading(false)
  }

  return (
    <>
      {
        location.pathname !== '/' && !loading ?
          <Wrapper>
              <Brand>LINKY</Brand>
              {
                state.user && state.isLoggedIn ?
                <List>
                  { location.pathname === '/dashboard' ?
                    <Link to={`/${state.user._id}`}>Your profile</Link>
                    :
                    <Link to={'/dashboard'}>Dashboard</Link>
                  }
                    <Link to='#' onClick={handleLogout}>
                        Logout
                    </Link>
                </List>
                :
                
                  !loading &&
                  <Link to='/'>Get Started</Link>
                
              }
          </Wrapper>
          :
          <></>
      }
    </>
  )
}

export default Navbar