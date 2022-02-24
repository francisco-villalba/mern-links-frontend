import { createContext, useContext, useReducer, useState } from 'react'
import { initialState, reducer } from './reducers'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)  
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(true)

    return (
        <AppContext.Provider value={
            { state, dispatch, message, setMessage, loading, setLoading }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

