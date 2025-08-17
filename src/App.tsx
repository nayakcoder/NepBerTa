import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import LandingPage from './pages/LandingPage'
import ChatPage from './pages/ChatPage'
import PlaygroundPage from './pages/PlaygroundPage'
import ImageToolsPage from './pages/ImageToolsPage'
import DocsPage from './pages/DocsPage'
import CommunityPage from './pages/CommunityPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/image-tools" element={<ImageToolsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App
