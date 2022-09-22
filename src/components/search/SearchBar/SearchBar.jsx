import './SearchBar.css'
function SearchBar() {
  return (
    <div className='searchBar-container'>
  <div className="field search">

<input type="text" placeholder='taper votre recherche'/>
  </div>
  <div className="field category-select">
    <select name="" id="">
      <option value="">Rechercher par catégorie</option>
    </select>
  </div>
    </div>
  )
}

export default SearchBar