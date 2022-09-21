import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import { getProfil, reset } from '../../features/user/userSlice'
import './converter.css'
function Converter() {


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


  const  [translate , setTranslate] = useState("")
  const [formData, setFormData] = useState({  })
const onSubmit = e => {
  e.preventDefault()
  if(!formData.amount)  {
    setTranslate('Vous devez indiquer un montant')
  }
  if(!formData.curency1 || formData.curency2) {
    setTranslate('vous devez indiquer une devise')
  }
  if(formData.curency1 === formData.curency2) {
    setTranslate("les devises choisit ne peuvent pas être identiques");
  }
  if(formData.curency1 === 'Krysto' && formData.curency2 === 'Xpf' ) {
    const result = (formData.amount * 1000 )
    setTranslate(`${result}`)
  }
  if(formData.curency1 === 'Xpf' && formData.curency2 === 'Krysto' ) {
    const result = (formData.amount / 1000 )
    setTranslate(`${result.toFixed(2)}`)
  }
  if(formData.curency1 === 'Unité' && formData.curency2 === 'Krysto' ) {
    const result = ( formData.amount /  profil.monyConvertValue   )
    setTranslate(`${result.toFixed(2)}`)
  }
  if(formData.curency1 === 'Krysto' && formData.curency2 === 'Unité' ) {
    const result = (  profil.monyConvertValue * formData.amount  )
    setTranslate(`${result.toFixed(9)}`)
  }
  if(formData.curency1 === 'Unité' && formData.curency2 === 'Xpf' ) {
    const result = ( formData.amount /  profil.monyConvertValue * 1000  )
    setTranslate(`${result.toFixed(2)}`)
  }
  if(formData.curency1 === 'Xpf' && formData.curency2 === 'Unité' ) {
    const result = ( formData.amount *  profil.monyConvertValue / 1000  )
    setTranslate(`${result.toFixed(2)}`)
  }
  console.log(formData);
}

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className='page-content'>
      <HeroTitle title={'Convertisseur de devises Krysto'} />

      <form onSubmit={onSubmit} className="form container p-4">
        <div className="field">

      <input min={0} step={'1'} onChange={onChange} name='amount' class="input is-large mb-5" type="number" placeholder="Montant"></input>
        </div>
        <div className="select-box">
        <div className="field">
        
    
        <select onChange={onChange} name='curency1'>
          <option value={''}>DE</option>
          <option value={'Unité'}>Unité</option>
          <option value={'Krysto'}>Krysto</option>
          <option value={'Xpf'}>Xpf</option>
        </select>
      </div>
          
            <div className='field'>
        <select onChange={onChange} name='curency2'>
          <option value={''}>Vers</option>
          <option value={'Unité'}>Unité</option>
          <option value={'Krysto'}>Krysto</option>
          <option value={'Xpx'}>Xpf</option>
        </select>
      </div>
        </div>
       
        
    
  
       
        <button className='submit-btn' type='submit'>Convertir</button>
      </form>
      {!translate ? "" : 
<div className="box translate-result container p-5 ">
  <p>{ formData.amount + " " + formData.curency1} = </p>
      <p>{translate + " " + formData.curency2}</p>
</div>
}
    </div>
  )
}

export default Converter
