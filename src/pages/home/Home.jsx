import DifferencesMonney from "../../components/home/landing/DifferencesMonney"
import Landing from "../../components/home/landing/Landing"
import SectionA from "../../components/home/landing/SectionA"
import SectionB from "../../components/home/landing/SectionB"
import SectionC from "../../components/home/landing/SectionC"
import SectionD from "../../components/home/landing/SectionD"
import SectionE from "../../components/home/landing/SectionE"
import SectionF from "../../components/home/landing/SectionF"
import SectionG from "../../components/home/landing/SectionG"
import SectionH from "../../components/home/landing/SectionH"
import SectionI from "../../components/home/landing/SectionI"
import SectionJ from "../../components/home/landing/SectionJ"
import Sectionk from "../../components/home/landing/Sectionk"
import SectionL from "../../components/home/landing/SectionL"

import './home.css'

function Home() {
  return (
    <div className="page-content">

      <Landing/>
      <SectionA/>
      <SectionB/>
      <SectionC/>
      {/* <SectionD/> */}
      <SectionE/>
      <DifferencesMonney/>
      <SectionF/>
      <SectionG/>
      <SectionH/>
      <SectionI/>
      <SectionJ/>
      <Sectionk/>
      <SectionL/>
     
    </div>
  )

}

export default Home
