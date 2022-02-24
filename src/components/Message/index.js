import React from 'react'
import { Wrapper } from './Message.styles'

const Message = ({ message }) => {
  return (
    <Wrapper>
        { message }
    </Wrapper>
  )
}

export default Message