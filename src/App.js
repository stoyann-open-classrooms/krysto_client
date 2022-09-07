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
import Charte from './pages/Charte'
import BugReport from './pages/BugReport'
import Thanks from './pages/Thanks'
import Team from './pages/Team'
import CompagnySolution from './pages/CompagnySolution'
import LegalMention from './pages/LegalMention'
import Cgu from './pages/Cgu'
import Cgv from './pages/Cgv'
import Testimonials from './pages/Testimonials'
import PressKit from './pages/PressKit'
import Files from './pages/Files'

function App() {
  return (
    <>
      <Router>
        <Header />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-subscription" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add-offer" element={<AddOffer />} />
            <Route path="/money" element={<Money />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/math-model" element={<MathModel/>} />
            <Route path="/charte" element={<Charte/>} />
            <Route path="/bug-report" element={<BugReport/>} />
            <Route path="/thanks" element={<Thanks/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/compagny-solution" element={<CompagnySolution/>} />
            <Route path="/legal-mention" element={<LegalMention/>} />
            <Route path="/cgu" element={<Cgu/>} />
            <Route path="/cgv" element={<Cgv/>} />
            <Route path="/testimonials" element={<Testimonials/>} />
            <Route path="/press-kit" element={<PressKit/>} />
            <Route path="/files" element={<Files/>} />
          </Routes>
    
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
