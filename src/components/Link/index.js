import React, { useState } from 'react'
import { Wrapper } from '../Link/Link.styles'
import { editLink, deleteLink } from '../../api'
import { useGlobalContext } from '../../context'
import { ImCross } from 'react-icons/im'

const Link = ({ link }) => {
  const [editMode, setEditMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [data, setData] = useState(link)
  const { dispatch, setMessage } = useGlobalContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const res = await editLink(data)
      dispatch({ type: 'EDIT_LINK', data: res.data })
      setEditMode(!editMode)
    } catch (error) {
      setMessage(error.response?.data.error || 'Something went wrong')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleDelete = async(e) => {
    e.preventDefault()

     try {
      await deleteLink(data)
      dispatch({ type: 'DELETE_LINK', data: link })
    } catch (error) {
      setMessage(error.response?.data.error || 'Something went wrong')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
          <input 
            type="text" 
            value={data.title}
            onChange={(e) => setData({...data, title: e.currentTarget.value })} 
            disabled={!editMode}
            required
          />
          <input 
            type="text" 
            value={data.href}
            onChange={(e) => setData({...data, href: e.currentTarget.value })} 
            disabled={!editMode}
            required
          />
              <div>

            {
              editMode ?
                <>
                  <button type='submit'>Submit</button>
                  <button className='cross' onClick={(e) => { e.preventDefault(); setEditMode(!editMode) }}>
                    <ImCross />
                  </button>
                </>
                :
              <>
                <button onClick={(e) => { e.preventDefault(); setEditMode(!editMode) }}>Edit</button>
                {
                  deleteMode ?
                  <button onClick={handleDelete}>
                    Confirm delete
                  </button> :
                  <button onClick={(e) => { e.preventDefault(); setDeleteMode(!deleteMode) }}>
                    Delete
                  </button>
                }
              </>
                
            }
              </div>
      </Wrapper>
    </form>
  )
}

export default Link