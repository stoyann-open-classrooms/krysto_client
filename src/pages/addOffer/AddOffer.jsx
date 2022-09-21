import AddOfferForm from '../../components/addOffer/AddOfferForm'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'

function AddOffer() {
  return (
    <div className='page-content'>
      <HeroTitle title={'Publier une annonce'} />

      <AddOfferForm />
    </div>
  )
}

export default AddOffer
