import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { user, reset } from '../features/auth/authSlice'
function Wallets() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess } = useSelector(
        (state) => state.auth,
      )

      console.log(user);
  return (
    <main>
            <div className="hero p-4">
        <div className="hero-container">
          <h1>Gerez mes Krysto.</h1>
        <div className="buttons mt-2 is-centered">
            <button className="button is-small is-warning">Compte courant</button>
            <button className="button is-small is-primary">Compte de dépot</button>
        </div>
        </div>
      </div>
    </main>
  )
}

export default Wallets