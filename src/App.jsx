import Landing from './pages/Landing'
import ChatBot from './pages/ChatBot'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TimelineComponent from './pages/timeline'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user/chatbot" element={<ChatBot/>} />
          <Route path="/timeline" element={<TimelineComponent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
