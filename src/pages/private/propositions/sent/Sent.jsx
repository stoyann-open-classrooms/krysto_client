import React from 'react'
import { useEffect } from 'react'
import { FaBackspace } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../../../features/user/userSlice'

function Sent() {

    const { profil, isLoading, isError, isSuccess } = useSelector(
        (state) => state.user,
      )
      const dispatch = useDispatch()
    
      useEffect(() => {
        return () => {
          if (isSuccess) {
            dispatch(reset())
          }
        }
      }, [dispatch, isSuccess, isError])
    
      useEffect(() => {
        dispatch(getProfil())
      }, [])
    
      console.log(profil)


if(!profil.user){
    return <Spinner/>
}

  return (

    <div>
           <Link to={"/private/dashboard/propositions"}>
        <button className='back-btn'> <FaBackspace/></button>
           </Link>
        <h2>vous avez 3 propositions envoyé</h2>
    </div>
  )
}

export default Sent