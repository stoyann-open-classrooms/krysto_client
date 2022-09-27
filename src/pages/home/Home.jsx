import Landing from "../../components/home/landing/Landing"
import SectionB from "../../components/home/landing/SectionB"
import SectionC from "../../components/home/landing/SectionC"
import SectionD from "../../components/home/landing/SectionD"
import SectionE from "../../components/home/landing/SectionE"

import './home.css'

function Home() {
  return (
    <div className="page-content">

      <Landing/>
      <SectionB/>
      <SectionC/>
      <SectionD/>
      <SectionE/>
     
    </div>
  )

}

export default Home
