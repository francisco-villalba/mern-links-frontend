import React, { useEffect, useState } from 'react'
import { themes } from '../../components/Theme/themes'
import { Wrapper, Links, Link, Info } from './Profile.styles'
import { Wrapper as Avatar } from '../../components/Avatar/Avatar.styles'
import { useParams } from 'react-router-dom'
import { getData, getProfile } from '../../api'
import { useGlobalContext } from '../../context'

const Profile = () => {
  const { setLoading } = useGlobalContext()
  const [data, setData] = useState(null)
  const { state, dispatch } = useGlobalContext()
  const id = useParams().id

  useEffect(() => {
    try {
      const fetchData = async () => {
        if (state.isLoggedIn && !state.user) {
          const user = await getData()
          dispatch({ type: 'INDEX', data: user.data })
        }
        const res = await getProfile(id) 
        setLoading(false)
        setData(res.data)
      }

      fetchData()
    } catch (error) {
      
    }
  }, [])

  return (
    <>
      {
        data && 
        <>
          <Wrapper theme={themes.find((t) => t.name === data.user.theme)}>
            <Info theme={themes.find((t) => t.name === data.user.theme)}>
              <Avatar className='avatar'>
                <img src={data.user.image} alt="Avatar" />
              </Avatar>
              <h1>{data.user.nickname}</h1>
              <p>{data.user.description}</p>

            </Info>

            <Links>
              {data.links.map((link, index) => (
                <Link   
                  href={link.href} target='_blank' rel='noreferer' key={index}>
                  {link.title}
                </Link>
              ))}
            </Links>
          </Wrapper>
        </>
      }
    </>
  )
}

export default Profile