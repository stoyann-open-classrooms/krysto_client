import React from 'react'
import './DashboardMiniCard.css'
function DashboardMiniCard(props) {
  return (
    <div className='dashboard-mini-card'>
        <h3>{props.title} </h3>
        <div className="dashboard-mini-card-body">
            {props.children}
        </div>
    </div>
  )
}

export default DashboardMiniCard