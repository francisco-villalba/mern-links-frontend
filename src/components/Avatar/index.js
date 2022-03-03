import React from "react"
import { Wrapper, Overlay } from "./Avatar.styles"
import {BsFillPencilFill} from 'react-icons/bs'
import avatar from '../../media/avatar.jpg'

const Avatar = ({ data, setData, editMode}) => {

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
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
      <img src={data.image || avatar}
          alt="Avatar"
      />
      {
        editMode &&
        <Overlay htmlFor="file-upload">
            <BsFillPencilFill />
            <input
              id='file-upload'
              type="file"
              name="avatar"
              accept=".jpeg, .png, .jpg"
              onChange={handleUpload}
            />
        </Overlay>
      }
    </Wrapper>
  )
}

export default Avatar
