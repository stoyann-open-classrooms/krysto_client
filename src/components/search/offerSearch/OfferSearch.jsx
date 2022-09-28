import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCategories } from '../../../features/category/categorySlice'
import Spinner from '../../shared/spinner/Spinner'
import SearchContext from "../../../context/Search/searchContext";
function OfferSearch({icone}) {



const dispatch  = useDispatch()
    const { categories, isLoading, isError, isSuccess } = useSelector(
        (state) => state.category,
      )
      useEffect(() => {
        dispatch(getCategories())
      }, [])
      const { getSearch, searchValue } = useContext(SearchContext);
   console.log(searchValue);
  return (
    <div className="offer-search-container">
       
      <div className="searchbar-container">
        <input  onChange={getSearch}
      value={searchValue}
      type="text"
      placeholder= {"taper votre recherche"}/>
      </div>
      <div className="dropdown-category-container">
        <select name="" id="">
       
     
            <option value="">Chercher par catégories</option>
         {categories.entities
                ? categories.entities.map((category) => (
                    <option key={category._id}>{category.name}</option>
                    ))
                    : <Spinner/>}
        </select>
      </div>
    </div>
  )
}

export default OfferSearch
