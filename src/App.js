import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
// === Layout components
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
// === Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Search from './pages/search/Search'
import AddOffer from './pages/addOffer/AddOffer'
import Money from './pages/money/Money'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Faq from './pages/faq/Faq'
import MathModel from './pages/mathModel/MathModel'
import Thanks from './pages/thanks/Thanks'
import BugReport from './pages/bugReport/BugReport'
import Charte from './pages/charte/Charte.jsx'
import Team from './pages/team/Team'
import LegalMention from './pages/legalMention/LegalMention'
import CompagnySolution from './pages/compagnySolution/CompagnySolution'
import Cgu from './pages/cgu/Cgu'
import Cgv from './pages/cgv/Cgv'
import Testimonials from './pages/testimonials/Testimonials'
import PressKit from './pages/pressKit/PressKit'
import Files from './pages/files/Files'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Dashboard from './pages/dashboard/Dashboard'
import MyOffers from './pages/myOffers/MyOffers'
import Offer from './pages/offer/Offer'
import Proposals from './pages/proposals/Proposals'
import Wallets from './pages/wallets/Wallets'
import G1VsKrysto from './pages/G1VsKrysto/G1VsKrysto'
import ProfilParameters from './pages/profilParameters/ProfilParameters'
import Error404 from './pages/404/Error404'
import KrystoProject from './pages/krystoProject/KrystoProject'
import RegisterForm from './pages/registerForm/RegisterForm'
import Presentation from './pages/Presentation/Presentation'
import Deposit from './pages/wallets/deposit/Deposit'
import Main from './pages/wallets/main/Main'
import UpdateOffer from './pages/updateOffer/UpdateOffer'
import Converter from './pages/Converter/Converter'
import PlasticProbleme from './pages/plasticProblem/PlasticProbleme'





function App() {
  return (
    <>
      <Router>
        
        <Header />
      
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path='/presentation'  element={<Presentation/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register-subscription" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add-offer" element={<AddOffer/>} />
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
            <Route path='/update-offer/:id' element={<UpdateOffer/>}/>
            <Route path="/proposals" element={<Proposals/>} />
            <Route path="/devise-converter" element={<Converter/>} />
            <Route path="/g1-vs-krysto" element={<G1VsKrysto/>} />
            <Route path="/register-form" element={<RegisterForm/>} />
            <Route path="/krysto-project" element={<KrystoProject/>} />
            <Route path="/plastic-problem" element={<PlasticProbleme/>} />
            <Route path="*" element={<Error404/>} />
            <Route path='/wallets' element={<Wallets/>}>
              <Route path='/wallets/deposit' element={<Deposit/>}/>
              <Route path='/wallets/main' element={<Main/>}/>
            </Route>
          </Routes>
    
        <Footer/>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
