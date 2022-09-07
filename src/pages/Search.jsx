import Filter from "../components/search/Filter/Filter"
import OfferList from "../components/search/OfferList/OfferList"


function Search() {

  return (
    <main>
      <Filter/>
      <div className="container-offers">
      <OfferList/>
      </div>
    </main>
  )
}

export default Search