import React from 'react'
import Section from './Section'
import ModelS from './models/Model_S'


const Home = () => {
  return (
    <div className='h-100vh'>
      <Section 
      title="Model 3"
      price="From $33,990"
      description="After Est. Savings"
      leftButton="Order Now"
      rightButton="Demo Drive"
      image="model-3"
      />

      <Section 
      title="Model X"
      price="From $63,990"
      description="After Est. Savings"
      leftButton="Order Now"
      rightButton="Demo Drive"
      image="model-x"
      />

      <Section
      title='Model S'
      price='From $75,990'
      description='After Est. Savings'
      leftButton='Order Now'
      rightButton='Demo Drive'
      image='model-s'
      />



      <Section
      title='Cybertruck'
      price=''
      description=''
      leftButton='Order Now'
      rightButton='Learn More'
      image="cybertruck"
      />

      

      <Section 
      title="Solar Panels"
      price=''
      description="Schedule a Virtual Consultation"
      leftButton="Order Now"
      rightButton="Learn More"
      image="solar"
      />
      
      <Section 
      title="Solar Roof"
      price=''
      description="Produce Clean Energy From Your Roof"
      leftButton="Order Now"
      rightButton="Learn More"
      image="solarroof"
      />

      <Section 
      title="Powerwall"
      price=''
      description=""
      leftButton="Order Now"
      rightButton="Learn More"
      image="powerwall"
      />

      <Section 
      title="Accessories"
      price=''
      description=""
      leftButton="Shop Now"
      rightButton=""
      image="accessories"
      />




    </div>
  )
}

export default Home