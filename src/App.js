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
import Search from './pages/search/Search'
import Register from './pages/register/Register'
import Money from './pages/money/Money'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Faq from './pages/faq/Faq'
import Thanks from './pages/thanks/Thanks'
import MathModel from './pages/mathModel/MathModel'
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
import Offer from './pages/offer/Offer'
import G1VsKrysto from './pages/G1VsKrysto/G1VsKrysto'
import Error404 from './pages/404/Error404'
import KrystoProject from './pages/krystoProject/KrystoProject'
import RegisterForm from './pages/registerForm/RegisterForm'
import Presentation from './pages/Presentation/Presentation'
import PlasticProbleme from './pages/plasticProblem/PlasticProbleme'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'


// ===== private
import Dashboard from './pages/dashboard/Dashboard'
import MyOffers from './pages/myOffers/MyOffers'
import AddOffer from './pages/addOffer/AddOffer'
import UpdateOffer from './pages/updateOffer/UpdateOffer'
import Proposals from './pages/proposals/Proposals'
import Wallets from './pages/wallets/Wallets'
import Main from './pages/wallets/main/Main'
import Deposit from './pages/wallets/deposit/Deposit'
import ProfilParameters from './pages/profilParameters/ProfilParameters'
import Converter from './pages/Converter/Converter'
import Private from './pages/private/Private'
import PrivateHome from './pages/private/privateHome/PrivateHome'
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess'
import ConfirmEmail from './pages/confirmEmail/ConfirmEmail'





function App() {
  return (
    <>
      <Router>
        
        <Header />
      
          <Routes>

            {/* === public */}
            <Route path="/" element={<Home />} />
          <Route path='/presentation'  element={<Presentation/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register-subscription" element={<Register />} />
            <Route path="/search" element={<Search />} />
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
            <Route path="/offer/:id" element={<Offer/>} />
            <Route path="/g1-vs-krysto" element={<G1VsKrysto/>} />
            <Route path="/register-form" element={<RegisterForm/>} />
            <Route path="/krysto-project" element={<KrystoProject/>} />
            <Route path="/plastic-problem" element={<PlasticProbleme/>} />
            <Route path="/register-success" element={<RegisterSuccess/>} />
            <Route path="/confirm-email" element={<ConfirmEmail/>} />
            <Route path="*" element={<Error404/>} />
  {/* ============ Private */}
              <Route path='/private' element={<Private/>}>
                <Route path='/private/private-home' element={<PrivateHome/>}/>
              </Route>

            <Route path="/add-offer" element={<AddOffer/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profil-parameters" element={<ProfilParameters/>} />
            <Route path="/my-offers" element={<MyOffers/>} />
            <Route path='/update-offer/:id' element={<UpdateOffer/>}/>
            <Route path="/proposals" element={<Proposals/>} />
            <Route path="/devise-converter" element={<Converter/>} />
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
