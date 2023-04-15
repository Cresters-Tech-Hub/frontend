import React, {useCallback } from 'react'
import './style.scss'
import uploadIcon from '../../assets/images/doc.png'
import tick from '../../assets/images/tick.png'
import x from '../../assets/images/x.png'
import { useDropzone } from 'react-dropzone'

interface IUpload {
  name: string
  subText?: string
  setFile: React.Dispatch<any>
  file?: File | null
}

export default function UploadDocs({ name, subText, file, setFile }: IUpload) {
  const onDrop = useCallback((acceptedFile: any) => {
    setFile(acceptedFile[0])
  }, [setFile])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.png', '.pdf'],
    },
    onDrop,
    multiple: false,
  })

  return (
    <div className="upload_component">
      <div className="upload_item_container">
        <div className="upload_item">
          <div className="item">
            <div className="text">{name}</div>
            {subText && <div className="subtext">{subText}</div>}
          </div>
          <div {...getRootProps({ className: 'item_upload_btn_container' })}>
           {!file && <img src={uploadIcon} alt="" />} 
            <input className="upload_btn" {...getInputProps()} />
            <button className={`upload_btn ${file ? 'upload_success' : null}`}>
              {file ? (
                <span>
                  <img src={tick} alt="" /> <span>File Uploaded</span>
                </span>
              ) : (
                'Select File'
              )}
            </button>
          </div>
        </div>
      </div>
      {file && (
        <div className="uploaded_item">
          <span>
            {file.name} -{Math.floor(Number(file.size) / 10000)}kb
          </span>
          <img src={x} alt="" onClick={()=>setFile(null)}/>
        </div>
      )}
    </div>
  )
}
