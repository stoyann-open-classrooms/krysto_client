import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashboardNav.css'
function DashboardNav() {
  return (
    <div className='dashboard-nav'>
   
        <button className="">
          <NavLink 
    to={'/private/dashboard/wallets/main'}
    className={({ isActive }) => {
        return isActive ? 'dashboard-nav-btn active' : 'dashboard-nav-btn'
      }}
  >

    Mes comptes
  </NavLink>
    </button>


   
      <button>
          <NavLink 
    to={'/private/dashboard/my-trocs'}
    className={({ isActive }) => {
        return isActive ? 'dashboard-nav-btn active' : 'dashboard-nav-btn'
      }}
  >

Mes Trocs
  </NavLink>
    </button>
      <button >
          <NavLink 
    to={'/private/dashboard/propositions'}
    className={({ isActive }) => {
        return isActive ? 'dashboard-nav-btn active' : 'dashboard-nav-btn'
      }}
  
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