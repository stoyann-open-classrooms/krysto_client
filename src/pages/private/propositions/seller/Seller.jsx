import React from 'react'
import { FaBackspace } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Seller() {
  return (
    <div>

<Link to={"/private/dashboard/propositions"}>
        <button className='back-btn'> <FaBackspace/></button>
           </Link>

    </div>
  )
}

export default Seller