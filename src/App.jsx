import Landing from './pages/Landing'
import ChatBot from './pages/ChatBot'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user/chatbot" element={<ChatBot/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
