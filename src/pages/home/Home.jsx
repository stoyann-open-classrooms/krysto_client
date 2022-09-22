import Kezako from "../../components/home/kezako/Kezako"
import Landing from "../../components/home/landing/Landing"
import NoMony from "../../components/home/noMony/NoMony"
import Price from "../../components/home/price/Price"
import Solution from "../../components/home/solution/Solution"
import Why from "../../components/home/why/Why"
import './home.css'

function Home() {
  return (
    <div className="page-content">
      <Landing/>
      <Kezako/>
      <Why/>
      <NoMony/>
      <Solution/>
      <Price/>
    </div>
  )

}

export default Home
