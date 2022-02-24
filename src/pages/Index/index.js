import React, { useEffect, useRef, useState } from "react"
import { Wrapper, Heading, Form, Button } from "./Index.styles"
import video from "../../media/bgvideo.mp4"
import { signin, signup } from '../../api'
import { useGlobalContext } from "../../context"

const IndexPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [data, setData] = useState({})
  const { dispatch, setMessage, setLoading } = useGlobalContext()
  const videoRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res
    
    setLoading(true)

    try {
      if(isLogin) {    
        res = await signup(data)
      } else {
        res = await signin(data)
      }
      dispatch({ type: 'AUTH', data: res.data })
    } catch (error) {
      setLoading(false)
      setMessage(error.response?.data.error || 'Something went wrong')
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    }    
  };

  useEffect(() => {
    setLoading(false)
    videoRef.current.play();
  }, [setLoading]);

  return (
    <>
      <Wrapper>
        
        <video loop muted ref={videoRef}>
          <source src={video} type="video/mp4" />
        </video>
        <div>
          <Heading>
            All your links in one place! <br /> Easy to use, easy to share
          </Heading>
          <Form onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                <input
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  onChange={(e) => setData({...data, email: e.target.value })}
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  onChange={(e) => setData({...data, password: e.target.value })}
                  required
                />
                <Button>Login</Button>
                <p onClick={() => setIsLogin(!isLogin)}>
                  Haven't got an account? Sign up!
                </p>
              </>
            ) : (
              <>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setData({...data, email: e.target.value })}
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Enter a password"
                  onChange={(e) => setData({...data, password: e.target.value })}
                  required
                />
                <input
                  name="nickname"
                  type="text"
                  placeholder="Enter a nickname"
                  onChange={(e) => setData({...data, nickname: e.target.value })}
                  required
                />
                <Button>Register</Button>
                <p onClick={() => setIsLogin(!isLogin)}>
                  Already got an account? Sign in!
                </p>
              </>
            )}
          </Form>
        </div>
      </Wrapper>
    </>
  );
};

export default IndexPage;
