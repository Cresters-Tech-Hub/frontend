import './App.css'
import AppRoutes from './components/route'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <AppRoutes/>
      <ToastContainer/>
    </div>
  )
}

export default App
