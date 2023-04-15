import { useDropzone } from "react-dropzone";
import React, {useCallback } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import "./style.scss"

interface Props{
    className?: string
    setFile: React.Dispatch<any>
    file?:any
    multi?:boolean
    style?:React.CSSProperties
    text?:string
  }
  

const AddMoreImages = ({className, setFile, multi, file, style, text}:Props) => {

    const onDrop = useCallback(
        (acceptedFile: any) => {
          setFile([...file , ...acceptedFile.map((file: any) => URL.createObjectURL(file))]);
        },
        [setFile, file]
    );
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [".jpeg", ".png", ".pdf"]
        },
        onDrop,
        multiple: multi ? true : false
    });
    return ( 
        <div className="add_new_property" style={{...style}}>
        <div {...getRootProps({ className: className ? className : "addNewAddress has_bg" })}>
            <div></div>
            <div onClick={() => null}>
            <input {...getInputProps()}/>
                <AiOutlinePlus color="#000000" />
                <span>{ text ? text : "Add more images" }</span>
            </div>
        </div>
    </div>
     );
}
 
export default AddMoreImages;