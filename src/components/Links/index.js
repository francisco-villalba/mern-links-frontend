import React, { useState } from 'react'
import { Wrapper } from './Links.styles'
import  { useGlobalContext } from '../../context'
import Link from '../Link'
import { Wrapper as LinkWrapper } from '../Link/Link.styles'
import { addLink } from '../../api'

const Links = () => {
  const { state, dispatch, setMessage } = useGlobalContext()
  const { links } = state
  const [data, setData] = useState({
    title: '',
    href: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await addLink(data)
      dispatch({ type: 'ADD_LINK', data: res.data})
      setData({ title: '', href: '' })
    } catch (error) {
      setMessage(error.response?.data.error || 'Something went wrong')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }
  
  return (

    <Wrapper>
      {
        links.length > 0 ?
        links.map((link, index) => (
          <Link link={link} key={index} />
          ))
        :
        <p>No links yet, start now!</p>
      }
      <form onSubmit={handleSubmit}>
        <LinkWrapper>
          <input 
            type="text" 
            placeholder='title'
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.currentTarget.value })}
            required
          />
          <input 
            type="text" 
            placeholder='https://yourlink.com'
            value={data.href} 
            onChange={(e) => setData({ ...data, href: e.currentTarget.value })}
            required
          />
          <button>Add Link</button>
        </LinkWrapper>
      </form>
    </Wrapper>
  )
}

export default Links