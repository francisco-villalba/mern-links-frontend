import React, { useState } from 'react'
import { editUser } from '../../api'
import { useGlobalContext } from '../../context'
import Avatar from '../Avatar'
import Theme from '../Theme'
import { Wrapper, Item, Button } from './Sidebar.styles'

const Sidebar = () => {
  const { state, dispatch, setMessage, setLoading } = useGlobalContext()
  const [data, setData] = useState(state.user)
  const [editMode, setEditMode] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await editUser(data)
      dispatch({ type: 'EDIT_USER', data })
      setEditMode(false)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setMessage(error.response?.data.error || 'Something went wrong')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
      <Wrapper>
        <Avatar data={data} setData={setData} editMode={editMode}/>
        <Item>
          <input value={data.nickname} disabled={!editMode} onChange={(e) => setData({ ...data, nickname: e.currentTarget.value })} />
          
        </Item>

        <Item>
          <textarea placeholder='Add a short description' value={data.description} disabled={!editMode} onChange={(e) => setData({ ...data, description: e.currentTarget.value })} />
        </Item>

        <Theme data={data} setData={setData} editMode={editMode} />

        {
        editMode ?
          <Button onClick={handleSubmit}>Save changes</Button>
        :
          <Button onClick={ () => setEditMode(!editMode)} >
              Edit profile
          </Button>
        }
      </Wrapper>
  )
}

export default Sidebar