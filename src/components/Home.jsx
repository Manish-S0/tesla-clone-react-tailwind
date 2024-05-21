import React from 'react'
import Section from './Section'

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
      title="Model S"
      price="From $66,490"
      description="After Est. Savings"
      leftButton="Order Now"
      rightButton="Demo Drive"
      image="model-s"
      />
      {/* <Section /> */}
    </div>
  )
}

export default Home