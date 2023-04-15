import React, {useCallback } from "react";
import "./style.scss"
import uploadImg from "../../assets/images/upload_img_box.png"
import Button from '../buttons'
import { useDropzone } from "react-dropzone";


interface Props{
  text?: string
  setFile: React.Dispatch<any>
  file?:any
  multi?:boolean
}

const UploadBox = ({text, setFile, multi, file}:Props) => {

    const onDrop = useCallback(
        (acceptedFile: any) => {
          setFile(acceptedFile.map((file: any) => URL.createObjectURL(file)));
        },
        [setFile]
    );

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [".jpeg", ".png", ".pdf"]
        },
        onDrop,
        multiple: multi ? true : false
    });

  return (
    <div {...getRootProps({ className: "upload_box" })}>
      <div className="inner_content">
        <img src={uploadImg} alt="" />
        <input {...getInputProps()}/>
        <div className="text">{text ? text : "Upload Photo at least 2 images"}</div>
        <Button text='Click to Upload' style={{padding:"10px", fontSize:"12px"}} onClick={(e)=>e.preventDefault()}/>
      </div>
    </div>
  )
}

export default UploadBox
