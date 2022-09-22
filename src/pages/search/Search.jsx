
import OfferList from "../../components/search/OfferList/OfferList"
import SearchBar from "../../components/search/SearchBar/SearchBar"
import './search.css'

function Search() {

  return (
    <div className="page-content">
<SearchBar/>
      <div className="container-offers">
      <OfferList/>
      </div>
    </div>
  )
}

export default Search