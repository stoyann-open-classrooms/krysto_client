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
import ProfilParameters from './pages/ProfilParameters'
import CompagnySolution from './pages/CompagnySolution'
import LegalMention from './pages/LegalMention'
import Cgu from './pages/Cgu'
import Cgv from './pages/Cgv'
import Testimonials from './pages/Testimonials'
import PressKit from './pages/PressKit'
import Files from './pages/Files'
import ForgotPassword from './pages/ForgotPassword'
import Error404 from './pages/Error404'
import Dashboard from './pages/Dashboard'
import MyOffers from './pages/MyOffers'
import Proposals from './pages/Proposals'
import Wallets from './pages/Wallets'
import G1VsKrysto from './pages/G1VsKrysto'
import Offer from './pages/Offer'

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
            <Route path="/compagny-solutions" element={<CompagnySolution/>} />
            <Route path="/legal-mention" element={<LegalMention/>} />
            <Route path="/cgu" element={<Cgu/>} />
            <Route path="/cgv" element={<Cgv/>} />
            <Route path="/testimonials" element={<Testimonials/>} />
            <Route path="/press-kit" element={<PressKit/>} />
            <Route path="/files" element={<Files/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profil-parameters" element={<ProfilParameters/>} />
            <Route path="/my-offers" element={<MyOffers/>} />
            <Route path="/offer/:id" element={<Offer/>} />
            <Route path="/proposals" element={<Proposals/>} />
            <Route path="/wallets" element={<Wallets/>} />
            <Route path="/g1-vs-krysto" element={<G1VsKrysto/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>
    
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
