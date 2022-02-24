import React from "react"
import { Wrapper, Overlay } from "./Avatar.styles"
import {BsFillPencilFill} from 'react-icons/bs'

const Avatar = ({ data, setData, editMode}) => {

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  const handleUpload = async (e) => {
    const file = await convertToBase64(e.target.files[0])
    setData({...data,  image: file})
  }

  return (

    <Wrapper>
      <img
        src={
          data.image
            ? data.image
            : "https://i.pinimg.com/736x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
          }
          alt="Avatar"
      />
      {
        editMode &&
        <Overlay htmlFor="file-upload">
          {/* <label htmlFor="input"> */}
            <BsFillPencilFill />
            <input
              id='file-upload'
              type="file"
              name="avatar"
              accept=".jpeg, .png, .jpg"
              onChange={handleUpload}
            />
          {/* </label> */}
        </Overlay>
      }
    </Wrapper>
  )
}

export default Avatar
