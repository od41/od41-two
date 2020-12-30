import { CMS_NAME } from '../lib/constants'
// import headerAnimation from '../public/assets/images/header-animation.gif'

export default function Intro() {
  return (

    <>
      <section className="md:w-100 mt-16 mb-16 md:mb-12">
        <div className="flex-row grid grid-flow-col auto-cols-max">
          <h4 className="font-display uppercase text-lg md:text-2xl self-start md:self-center">
            <span style={{ WebkitTextStroke: '0.9px rgba(20, 19, 15, 0.8)', color: 'transparent' }}> My name is Odafe, I'm on a mission to</span> design & build solutions that'll unlock trillions of dollars in value in Africa.
          </h4>
          <div>
            <img src="assets/images/header-animation.gif" />
          </div>
        </div>
      </section>

      <section className="flex-col md:flex-row flex flex-wrap mt-16 mb-16 md:mb-12">
        {/* <h1 className="font-display text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
          Welcome...
      </h1> */}

        <div className="flex-row ">
          <h4 className="font-body text-left text-lg mt-5 mb-6">
            As a design/product consultant I've partnered with solopreneurs and startups to launch various brands, business, digital products and services.<br />
            <span className="text-xs uppercase text-gray-500 font-extralight">(Scroll to see featured work)</span>
          </h4>
          <div>
            <img src="assets/images/logofolio-landscape.png" />
            <p className="font-body text-xs uppercase text-gray-500 font-extralight text-center mt-4">Selection of designed logos</p>
          </div>
        </div>


        <h4 className="font-body text-left text-lg mt-5 ">
          I've also worked within the design teams of more established companies as a designer/developer with some notable clients being ipNX Nigeria Limited, ART X Lagos, and Lagos Fashion Week.
        <br /><br />
        I'm only getting started.
        <br /><br />
        Currently, I lead design at WhiteZobo Agency and I'm helping Nigerians and other Africans get alternate energy solutions at SolarPro Africa.
      </h4>
      </section>
    </>
  )
}
