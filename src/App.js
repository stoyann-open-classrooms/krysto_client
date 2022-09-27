import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
// === Import Layout components
import Header from './components/layout/header/Header'
// === Import Public pages 
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Error404 from './pages/404/Error404'
import Search from './pages/search/Search'

// === Import Private pages 
import Dashboard from './pages/private/dashboard/Dashboard.jsx'
import Wallets from './pages/private/wallets/Wallets.jsx'
import Private from './pages/private/Private'
import Propositions from './pages/private/propositions/Propositions'
import Trocs from './pages/private/trocs/Trocs.jsx'
import Offer from './pages/offer/Offer'
import RegisterSubscription from './pages/registerSubscription/RegisterSubscription'
import Deposit from './pages/private/wallets/deposit/Deposit'
import Main from './pages/private/wallets/main/Main'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/register-subscription" element={<RegisterSubscription/>} />
            <Route path="/offer/:id" element={<Offer/>} />
            <Route path="*" element={<Error404 />} />
            {/* Private routes */}
            <Route
              path="/private"
              element={<Private/>}
            >
               <Route path="/private/dashboard" element={<Dashboard/>} />

               <Route path="/private/dashboard/wallets" element={<Wallets />}>
              <Route path="/private/dashboard/wallets/deposit" element={<Deposit />} />
              <Route path="/private/dashboard/wallets/main" element={<Main />} />
            </Route>


               <Route path="/private/dashboard/propositions" element={<Propositions/>} />
               <Route path="/private/dashboard/my-trocs" element={<Trocs/>} />
            </Route>
          </Routes>
        </main>
        {/* <Footer/> */}
      </Router>
  
      <ToastContainer />
    </>
  )
}

export default App
