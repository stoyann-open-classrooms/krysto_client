import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, reset } from '../../../features/category/categorySlice'
import './SearchBar.css'
function SearchBar() {

  const dispatch = useDispatch()
  const { categories, isLoading, isError, isSuccess } = useSelector(
    (state) => state.category,
  )
 

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getCategories())
  }, [])
  console.log(categories);

  return (
    <div className='searchBar-container'>
  <div className="field search">

<input type="text" placeholder='taper votre recherche'/>
  </div>
  <div className="field category-select">
    <select name="" id="">
      <option value="">Rechercher par catégorie</option>
      {categories.entities
                ? categories.entities.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))
                : ''}
    </select>
  </div>
    </div>
  )
}

export default SearchBar