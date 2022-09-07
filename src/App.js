import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
// === Layout components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
// === Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import AddOffer from './pages/AddOffer'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Money from './pages/Money'
import MathModel from './pages/MathModel'

function App() {
  return (
    <>
      <Router>
        <Header />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add-offer" element={<AddOffer />} />
            <Route path="/money" element={<Money />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/math-model" element={<MathModel/>} />
          </Routes>
    
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
