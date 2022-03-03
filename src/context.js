import { createContext, useContext, useReducer, useState, useEffect } from 'react'
import { initialState, reducer } from './reducers'
import decode from 'jwt-decode'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)  
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = JSON.parse(state.isLoggedIn).token
        
        if(token && decode(token).exp * 1000 < new Date().getTime()) {
            dispatch({ type: 'LOGOUT'})
        }
    }, [])

    return (
        <AppContext.Provider value={
            { state, dispatch, message, setMessage, loading, setLoading }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

