import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
// === Layout components
import Header from './components/layout/Header'
// === Pages
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
