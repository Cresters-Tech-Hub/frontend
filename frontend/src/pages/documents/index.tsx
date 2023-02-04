import React, { useState } from 'react'
import Button from '../../components/buttons'
import AlertBox from '../../components/helper/Alert'
import UploadDocs from '../../components/uploaddocs'
import './style.scss'
import notes from '../../assets/images/notes.png'

export default function Documents() {
  const [fileDL, setFileDL] = useState(null)
  const [fileVR, setFileVR] = useState(null)
  const [fileGI, setFileGI] = useState(null)
  const [filePP, setFilePP] = useState(null)
  const [fileUB, setFileUB] = useState(null)
  const [fileCAC, setFileCAC] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState({
    click: false,
    review: false,
  })

  const handleUpload = () => {
    if (fileCAC || fileDL || fileGI || filePP || fileUB || fileVR) {
      console.log('submitted for approval')
      setIsSubmitting({ ...isSubmitting, click: true })
      setTimeout(() => setIsSubmitting({ ...isSubmitting, review: true }), 2000)
    }
  }

  if (isSubmitting.review) {
    return (
      <div className="notes_review">
        <div className="container">
        <img src={notes} alt="" />
        <div className="notes_text">
          Documents submitted currently undergoing verification! Expect
          verification update in 3 days after your submission👍🏼
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="documents">
      <AlertBox
        type="info"
        text="Kindly update your account here and include the necessary documents required to start getting match as a vendor/logistics agent."
      />
      <div className="main_title">
        <div className="title">Required Documents</div>
        <div className="subtitle">
          Supported file formats are .pdf, .png, .gif, .jpg and .jpeg
        </div>
      </div>
      <div className="upload_documents_container">
        <UploadDocs name="Driver's License" setFile={setFileDL} file={fileDL} />
        <UploadDocs
          name="Vehicle Registration document"
          setFile={setFileVR}
          file={fileVR}
        />
        <UploadDocs
          setFile={setFileGI}
          file={fileGI}
          name="Government Issued Id"
          subText="Voters card, National Identity card or international passport"
        />
        <UploadDocs setFile={setFilePP} file={filePP} name="Passport Photo" />
        <UploadDocs setFile={setFileUB} file={fileUB} name="Utility Bill" />
        <UploadDocs
          setFile={setFileCAC}
          file={fileCAC}
          name="CAC/ Business Registration document"
        />
      </div>
      <Button
        text="Submit for Approval"
        className="upload_width"
        onClick={handleUpload}
        spinner={isSubmitting.click}
      />
    </div>
  )
}
