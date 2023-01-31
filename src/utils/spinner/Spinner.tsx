import './spinner.scss'

interface SpinnerProp{
    imageUri:string
}

function Spinner({imageUri}:SpinnerProp) {

  return (
    <div className="spinner">
    <img src={imageUri} alt="loader image" 
    width='70px'
    height='70px'/>
    </div>
  )
}

export default Spinner
