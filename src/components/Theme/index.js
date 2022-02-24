import React from 'react'
import { ThemeGrid, Wrapper, Current, Overlay } from './Theme.styles'
import { themes } from './themes'
import { TiTick } from 'react-icons/ti'

const Theme = ({ data, setData, editMode }) => {
  return (
    <>
      {
        editMode ?
          <Wrapper>
            {
              themes.map((theme, index) => (
                  <ThemeGrid key={index} theme={theme} onClick={() => {setData({ ...data, theme: theme.name }) }}>
                    {
                      theme.name === data.theme && <Overlay><TiTick /></Overlay>
                    }
                  </ThemeGrid>
              ))
            }
          </Wrapper>
        :
          <Current theme={themes.find(theme => theme.name === data.theme )}>
            <p>Current theme</p>
          </Current>
      }
    </>
  )
}

export default Theme