import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashboardNav.css'
function DashboardNav() {
  return (
    <div className='dashboard-nav'>
        <button >
          <NavLink
    to={'/private/dashboard'}
  
  >
home
  </NavLink>
    </button>
        <button className="dashboard-nav-btn">
          <NavLink 
    to={'/private/dashboard/wallets'}
  
  >

    Mes comptes
  </NavLink>
    </button>


   
      <button className="dashboard-nav-btn">
          <NavLink 
    to={'/private/dashboard/my-trocs'}
  
  >

Mes Trocs
  </NavLink>
    </button>
      <button className="dashboard-nav-btn">
          <NavLink 
    to={'/private/dashboard/propositions'}
  
  >

Mes propositions
  </NavLink>
    </button>
    </div>
  )
}

export default DashboardNav



// <div className="account-btn-container">
//   <NavLink
 
//   >
//     Compte courant
//   </NavLink>
//   <NavLink
//     to={'/private/wallets/deposit'}
//     className={({ isActive }) => {
//       return isActive ? 'account-btn-active' : 'account-btn'
//     }}
//   >
//     Compte de dépot
//   </NavLink>
// </div>