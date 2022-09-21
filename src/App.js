import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
// === Layout components
import Header from './components/layout/header/Header'
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
import UpdateOffer from './pages/private/updateOffer/UpdateOffer'
import Proposals from './pages/proposals/Proposals'

import ProfilParameters from './pages/profilParameters/ProfilParameters'
import Converter from './pages/Converter/Converter'
import Private from './pages/private/Private'
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess'
import ConfirmEmail from './pages/confirmEmail/ConfirmEmail'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Wallets from './pages/private/wallets/Wallets'
import Deposit from './pages/private/wallets/deposit/Deposit'
import Main from './pages/private/wallets/main/Main'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <main className="content">
          <Routes>
            {/* === public */}
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-subscription" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/money" element={<Money />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/math-model" element={<MathModel />} />
            <Route path="/charte" element={<Charte />} />
            <Route path="/bug-report" element={<BugReport />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/team" element={<Team />} />
            <Route path="/compagny-solutions" element={<CompagnySolution />} />
            <Route path="/legal-mention" element={<LegalMention />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/files" element={<Files />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/g1-vs-krysto" element={<G1VsKrysto />} />
            <Route path="/register-form" element={<RegisterForm />} />
            <Route path="/krysto-project" element={<KrystoProject />} />
            <Route path="/plastic-problem" element={<PlasticProbleme />} />
            <Route path="/register-success" element={<RegisterSuccess />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/offer/:id" element={<Offer />} />
       
     <Route path="/private" element={<Private />}>
     
            <Route path="/private/converter" element={<Converter />} />
            <Route path="/private/add-offer" element={<AddOffer />} />
            <Route path="/private/dashboard" element={<Dashboard />} />
            <Route path="/private/profil-parameters" element={<ProfilParameters />} />
            <Route path="/private/my-offers" element={<MyOffers />} />
            <Route path="/private/update-offer/:id" element={<UpdateOffer />} />
            <Route path="/private/proposals" element={<Proposals />} />
            <Route path="/private/devise-converter" element={<Converter />} />
            <Route path="/private/wallets" element={<Wallets />}>
              <Route path="/private/wallets/deposit" element={<Deposit />} />
              <Route path="/private/wallets/main" element={<Main />} />
            </Route>
            </Route>

          </Routes>
 <Footer/>
        </main>
     {/* ============ Private */}
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
