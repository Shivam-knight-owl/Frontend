import './App.css'
import { Route,Routes,Router, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Signup from './pages/signup'
import Signin from './pages/signin'
function App() {

  return (
    <>
      <BrowserRouter>

      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
