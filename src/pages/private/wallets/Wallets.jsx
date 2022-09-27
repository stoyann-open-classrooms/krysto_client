import { Outlet, NavLink } from 'react-router-dom'

function Wallets() {

  return (
    <div className="page-content">
      <div className="account-btn-container">
        <NavLink
          to={'/private/wallets/main'}
          className={({ isActive }) => {
            return isActive ? 'account-btn-active' : 'account-btn'
          }}
        >
          Compte courant
        </NavLink>
        <NavLink
          to={'/private/wallets/deposit'}
          className={({ isActive }) => {
            return isActive ? 'account-btn-active' : 'account-btn'
          }}
        >
          Compte de dépot
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Wallets
