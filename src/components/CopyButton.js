import React, { useState } from 'react'
import styled from 'styled-components'
import { BiShareAlt } from 'react-icons/bi'
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-dark);
    background-color: var(--color-light);
    color: var(--color-dark);
    font-size: 2rem;
    padding: 1rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: .2s;

    :active {
        transform: scale(1.1);  
    }
`

const CopyButton = ({ userId }) => {
  const [copied, setCopied] = useState(false)

  return (
    <Button onClick={() => {
        navigator.clipboard.writeText(`https://mern-links.netlify.app/${userId}`)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }}> 
        { copied ?
            'Copied!'
            :
            <>
            Share page&nbsp;
            <BiShareAlt />
            </>
        }
    </Button>
  )
}

export default CopyButton