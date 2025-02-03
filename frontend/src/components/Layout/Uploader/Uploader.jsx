import React from 'react'
import "../Uploader/Uploader.css"
import {MdCloudUpload,MdDelete} from "react-icons/md"
import {AiFillFileImage} from "react-icons/ai"

const Uploader = () => {
  return (
    <div className='imagechoose'>
    <label>choose image to upload</label>
    <input type='file'/>
    </div>
  )
}

export default Uploader
