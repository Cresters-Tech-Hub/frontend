import { FormikErrors } from 'formik';
import React, {useState, useEffect} from 'react'

interface Props{
    errors:FormikErrors<{password:string, newPassword:string}>
}

const ErrorChecker = ({errors}:Props) => {
    const [submitButtonBackground, setSubmitButtonBackground] = useState(false);

    useEffect(() => {
      if ([...Object.keys(errors)].length > 0) {
        setSubmitButtonBackground(true);
      } else {
        setSubmitButtonBackground(false);
      }
    }, [errors]);
  return submitButtonBackground;
  
}

export default ErrorChecker
