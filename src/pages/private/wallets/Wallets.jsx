import { Outlet, NavLink } from 'react-router-dom'

function Wallets() {

  return (
    <div className="page-content">
      <div className="account-btn-container buttons">
      <button className="submit-btn">
          <NavLink 
    to={'/private/dashboard/wallets/main'}
    className={({ isActive }) => {
        return isActive ? 'dashboard-nav-btn active' : 'dashboard-nav-btn'
      }}
  >

    compte courant
  </NavLink>
    </button>
      <button className="submit-btn">
          <NavLink 
    to={'/private/dashboard/wallets/deposit'}
    className={({ isActive }) => {
        return isActive ? 'dashboard-nav-btn active' : 'dashboard-nav-btn'
      }}
  >

    compte de dépot
  </NavLink>
    </button>
      </div>
      <Outlet />
    </div>
  )
}

export default Wallets
