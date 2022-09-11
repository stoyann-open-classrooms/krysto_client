
import Landing from "../../components/home/Landing/Landing"
import RecapSection from "../../components/home/recapSection/RecapSection"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
  { title: 'First item', description: 'Lorem ipsum'},
  { title: 'Second item', description: 'Lorem ipsum'}
];
function Home() {
  return (
    <>
        <Landing>

        </Landing>
       
        <RecapSection/>
    </>
  )
}

export default Home